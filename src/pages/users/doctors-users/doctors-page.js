import addUserIcon from "src/assets/icons/addUserIcon.svg";
import DoctorsTable from "./doctors-table";

export default function DoctorsPage(){
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

        <DoctorsTable />

      </div>

    <div className="doctorsPagination text-white ">

      Pagination

    </div>

    </div>
  )
}