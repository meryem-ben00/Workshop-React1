import './users-page.css';
import addUserIcon from "/src/assets/icons/addUserIcon.svg";

export default function UsersPageHeader({ itemsNumber, userType }){

  return (
    <div className="generalInfo text-white mb-6 flex justify-between items-center">

      <div>

        <h3 className="font-bold">List of { userType } </h3>
        <span className="font-light text-xs">
          { itemsNumber } available { userType }
        </span> 

      </div>
      {
        ((userType) === 'doctors') && (
          <button className="addButton flex justify-center items-center gap-2">
            <img src={addUserIcon} alt="Add User Icon" />
            <span>Add new doctor</span>
          </button>
        )
      }

    </div>
  )
}