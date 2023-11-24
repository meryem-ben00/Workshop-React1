import { useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
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

  const tableData =  useMemo( () => doctorsMockData, [] );

  /** @type import("@tanstack/react-table").columnDef<any> */
  const tableColumns = [
    {
      Headers: 'Name',
      accessorKey: 'name'
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
      accessorKey: 'date-added'
    },
    {
      Headers: 'Status',
      accessorKey: 'status'
    },
    {
      Headers: '',
      accessorKey: 'image-url'
    },
  ]

  const table = useReactTable(tableData, tableColumns);

  return (
    <div className="doctorsTableCom">

      <table>

        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
          <td>ID</td>
          </tr>
        </tfoot>

      </table>

    </div>
  )
}