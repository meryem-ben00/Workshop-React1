import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import doctorsMockData from 'src/assets/mock-data/doctors-mock-data.json';

export default function DoctorsTable(){
  /*   
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

    function cellValue(cell){
      console.log('Check', cell.id);
      if(cell.column.columnDef.Headers == "Name"){
        const cellOject = JSON.parse(cell.getValue())
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
      if(cell.column.columnDef.Headers == " "){
        return <img src="/src/assets/icons/rightArrowIcon.svg" alt="Right arrow." />
      }

      if(cell.column.columnDef.Headers == "Date added"){
        const cellOject = JSON.parse(cell.getValue())
        return(
          <>
            <span className="block">{cellOject.date}</span>
            <span className="block timeAdded">{cellOject.time}</span>
          </>
        )
      }

      if(cell.column.columnDef.Headers == "Date added"){
        const cellOject = JSON.parse(cell.getValue())
        return(
          <>
            <span className="block">{cellOject.date}</span>
            <span className="block timeAdded">{cellOject.time}</span>
          </>
        )
      }

      else return flexRender(cell.column.columnDef.cell, cell.getContext())
  }

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
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="doctorsTableCom">

      <table className="usersTable">
        <thead className="usersTableHeader bg-white rounded-md">
          { table.getHeaderGroups().map(
            headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  header => <th key={header.id} className="text-left font-semibold text-xs py-2 px-4">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                )}
              </tr>
            )
          )}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(
            row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(
                  cell => (
                    <td key={cell.id} className={
                      "text-sm text-left py-2 font-semibold " +
                      (
                        cell.column.columnDef.Headers === "Name" ?
                          "firstColumn flex items-center gap-3" 
                        :
                          "normalColumn px-4 "
                      ) +
                      (
                        cell.column.columnDef.Headers === " "? 
                          "text-right pr-0" 
                        : 
                          ""
                      ) 
                    } >
                      { flexRender(cell.column.columnDef.cell, cell.getContext()) } 
                    </td>
                  )
                )}
              </tr>
            ) 
          )}
        </tbody>
      </table>

    </div>
  )
}