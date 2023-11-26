import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import addUserIcon from "src/assets/icons/addUserIcon.svg";
import doctorsMockData from 'src/assets/mock-data/doctors-mock-data.json';
import DoctorsTable from "./doctors-table";

export default function DoctorsPage(){

    /* !!!   
    {
      "image-url": "http://dummyimage.com/199x100.png/dddddd/000000",
      "name": "Flossy Blankhorn",
      "id": "com.bloglovin.Opela",
      "email": "fblankhorn0@home.pl",
      "phone-number": "(205) 2171337",
      "date-added": "12/08/2022",
      "time-added": "11:17 PM",
      "status": "Alabama"
    },
  */

  // const tableData =  useMemo( () => doctorsMockData, [] );
  const [tableData, useTableData] =  useState(doctorsMockData);

  /** @type import("@tanstack/react-table").columnDef<any> */
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
          "bg-white py-1 px-2 rounded-md font-medium text-xs " + 
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
        <div className="bg-white py-1 px-2 rounded-md">
          <img className="w-5 h-5" src="/src/assets/icons/rightArrowIcon.svg" />
        </div>          
      )

    }
  ];

  const table = useReactTable({
    data: tableData, 
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div className="doctorsPage pt-5">

      <div className="generalInfo text-white mb-6 flex justify-between items-center">

        <div>

          <h3 className="font-bold">List of doctors</h3>
          <span className="font-light text-xs">345 available doctors</span>

        </div>

        <button className="addButton flex justify-center items-center gap-2">
          <img src={addUserIcon} alt="Add User Icon" />
          <span>Add new doctor</span>
        </button>

      </div>

      <div className="doctorsTable text-white mb-7">

        <DoctorsTable table={table} />

      </div>

    <div className="doctorsPagination flex justify-center items-center gap-2 ">

      {/* !!! Thing about all the possible scenarios and Code for them. */}
      <button onClick={() => table.setPageIndex(0)} className="paginationButton">
        <img src="/src/assets/icons/doubleLeftChevronIcon.svg" />
      </button>

      <button 
        className="paginationButton"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <img src="/src/assets/icons/leftChevronIcon.svg" />
      </button>

      <button onClick={() => table.setPageIndex(0)} className="paginationButton"> 1 </button>
      
      <button onClick={() => table.setPageIndex(1)} className="paginationButton"> 2 </button>
      
      <button onClick={() => table.setPageIndex(2)} className="paginationButton"> 3 </button>
      
      <button className="paginationButton"> ... </button>
      
      <button onClick={() => table.setPageIndex(9)} className="paginationButton"> 10 </button>
      
      <button 
        className="paginationButton"
        onClick={() => table.nextPage()} 
        disabled={!table.getCanNextPage()}
      >
        <img src="/src/assets/icons/rightChevronIcon.svg" />
      </button>
      
      <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="paginationButton">
        <img src="/src/assets/icons/doubleRightChevronIcon.svg" />
      </button>

    </div>

    </div>
  )
}

// TODO: Finish the Figma style requirements.
// TODO: Think about all the possible possibilities.
// TODO: Resize the table cells number.
// TODO: Custom style like reduce the opacity on the disabled button.