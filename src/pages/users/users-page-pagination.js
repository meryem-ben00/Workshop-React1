import { useState } from "react";

export default function UsersPagePagination(props){

  const table = props.table;
  const tableItemsAmount = table.getFilteredRowModel().rows.length; //Number of existing items
  const numberOfDesiredPages = Math.ceil(tableItemsAmount/6);

  const [pageNumber, setPageNumber] = useState(table.getPageCount());

  // Highlight the current page. 
  const currentPageIndex = table.getState().pagination.pageIndex;

  const middlePagesActive = () => {
    if(currentPageIndex > 2 && currentPageIndex < table.getPageCount() - 1) 
      return true;
    return false;
  }


  return (
    <div className="doctorsPagination flex justify-center items-center gap-2 ">

    {
      numberOfDesiredPages > 4 && (
        <>

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

        </>

      )
    }

    <button 
      onClick={() => table.setPageIndex(0)} 
      className={
        "paginationButton " +
        ( (currentPageIndex == 0) ? "bg-root-green text-white" : "" )
      } > 1 </button>

    <button 
      onClick={() => table.setPageIndex(1)} 
      className={
        "paginationButton " +
        ( (currentPageIndex == 1) ? "bg-root-green text-white" : "" )
      } > 2 </button>

    {
      (numberOfDesiredPages > 2) && (
        <button
          onClick={() => table.setPageIndex(2)}
          className={
            "paginationButton " +
            ( (currentPageIndex == 2) ? "bg-root-green text-white" : "" )
          }
        > 3 </button>
      )
    }

    {
      (numberOfDesiredPages > 4) && (
        <button className={
          "paginationButton " +
          ( middlePagesActive() ? "bg-root-green text-white" : "" ) 
        }
        > ... </button>
      )
    }

    {
      (numberOfDesiredPages > 3) && (
        <button 
        onClick={() => table.setPageIndex(table.getPageCount() - 1)} 
        className={

          "paginationButton " +
          (
            (currentPageIndex == table.getPageCount() - 1) ? 
            "bg-root-green text-white" :
            ""
          )
        }
      > {table.getPageCount()} </button>
      )
    }

    {
      numberOfDesiredPages > 4 && (
        <>

          <button 
            className="paginationButton"
            onClick={() => table.nextPage()} 
            disabled={!table.getCanNextPage()}
          >
            <img src="/src/assets/icons/rightChevronIcon.svg" />
          </button>

          <button 
            onClick={() => table.setPageIndex(table.getPageCount() - 1)} 
            className="paginationButton"
          >
            <img src="/src/assets/icons/doubleRightChevronIcon.svg" />
          </button>

        </>

      )
    }

  </div>

  )

}