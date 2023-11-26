import { flexRender } from "@tanstack/react-table";

export default function DoctorsTable(props){
  const table = props.table;

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