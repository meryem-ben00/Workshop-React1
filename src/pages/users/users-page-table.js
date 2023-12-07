import { flexRender } from "@tanstack/react-table";

export default function UsersPageTable( { table } ){
  // const table = props.table;

  return (
    <div className="usersTableCom text-white mb-7 overflow-x-auto">

      <table className="usersTable">
        <thead className="usersTableHeader bg-white rounded-md">
          { table.getHeaderGroups().map(
            headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  header => <th 
                    key={header.id} 
                    className="text-left font-semibold text-xs px-4"
                  >
                    <div className="overflow-hidden h-10 leading-10">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                    
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
                      "text-sm text-left py-2 font-semibold min-w-max " +
                      (
                        cell.column.columnDef.Headers === "Name" ?
                          "firstColumn flex items-center gap-3" 
                        :
                          "normalColumn px-4 "
                      ) +
                      (
                        cell.column.columnDef.Headers === " "? 
                          "text-right ps-0 pe-0" 
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