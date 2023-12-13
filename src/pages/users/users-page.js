import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import UsersPageHeader from "./users-page-header";
import UsersPagePagination from "./users-page-pagination";
import UsersPageTable from "./users-page-table";
import './users-page.css';
import administrationsMockData from "/src/assets/mock-data/administrations-mock-data.json";
import doctorsMockData from "/src/assets/mock-data/doctors-mock-data.json";

export default function UsersPage() {
  const [tableData, setTableData] = useState([]);
  let itemsNumber = tableData.length;
  const { type } = useParams();

  useEffect(() => {

    if (type === 'doctors') {
      setTableData(doctorsMockData);
    } else if (type === 'administrations') {
      setTableData(administrationsMockData);
    } else {
      //!!! Return it to the previous Component.
    }

  }, [type, doctorsMockData, administrationsMockData]); 

  const tableColumns = [
    {
      Headers: 'Name',
      id: 'Name',
      accessorFn: row => `{"name": "${row.name}", "imageUrl": "${row['image-url']}"}`,
      cell : row => {
        const cellOject = JSON.parse(row.getValue())
        return(
          <>
            <img src={cellOject.imageUrl} alt="User image" className="rounded-md" />
            <div>
              <span className="block">{cellOject.name}</span>
              <span className="block userType">Doctor</span>
            </div>
          </>
        )
      } 
    },
    {
      Headers: 'ID',
      accessorKey: 'id'
    },
    {
      Headers: 'Email',
      accessorKey: 'email'
    },
    {
      Headers: 'Phone number',
      accessorKey: 'phone-number'
    },
    {
      Headers: 'Date added',
      id: 'Date added',
      accessorFn: row => `{"date": "${row['date-added']}", "time": "${row['time-added']}"}`,
      cell : row => {
        const cellOject = JSON.parse(row.getValue())
        return(
          <>
            <span className="block">{cellOject.date}</span>
            <span className="block timeAdded">{cellOject.time}</span>
          </>
        )
      }  
    },
    {
      Headers: 'Status',
      accessorKey: 'status',
      cell : (row) =>(
        <div className={
          "bg-white py-1 px-2 rounded-md font-medium text-xs text-center max-w-fit " + 
          (
            row.getValue() == "Approved" ? 
              "text-[#568D4E]":
              "text-[#F64E60]"
          )
        }>
          {row.getValue()}
        </div>          
      )
    },
    {
      Headers: " ",
      id:" ",
      cell : (row) =>(
        <div className="bg-white p-1 rounded-md flex justify-center items-center">
          <img className="w-5 h-5" src="/src/assets/icons/rightArrowIcon.svg" />
        </div>          
      )

    }
  ];

  const table = useReactTable({
    data: tableData, 
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  return(
    <div className="usersPage relative px-0 md:px-1 xl:px-5 2xl:px-24 pt-16">

      <div className='userTypesContainer absolute top-0 bg-white py-3
        px-1 sm:px-7 flex justify-center items-center gap-3 rounded-b-xl'
      >

        <NavLink 
          to="/dashboard/users/doctors" 
          className={
            "userType block py-2 px-5 sm:px-7 rounded font-bold " +
            ((type === 'doctors') ? "activeLink" : "")
          }
        > Doctor </NavLink>

        <NavLink
          to="/dashboard/users/administrations" 
          className={
            'userType block py-2 px-5 sm:px-7 rounded font-bold ' +
            ((type === 'administrations') ? 'activeLink' : '')
          }
        > Administration </NavLink>

      </div>

      <div className="mainContent pt-5">

        <UsersPageHeader itemsNumber={itemsNumber} userType={type} />

        <UsersPageTable table={table} />

        { itemsNumber > 6 && <UsersPagePagination table={table} /> }

      </div>

    </div>
  )
}


// TODO: Resize the table cells number.
// TODO: Center the top absolute div.