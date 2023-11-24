import { NavLink, Outlet } from 'react-router-dom';
import './users-page.css';

export default function UsersPage() {
  return(
    <div className="usersPage relative">

      <div className='userTypesContainer absolute top-0 bg-white py-3 px-7 flex justify-center items-center gap-3 rounded-b-xl'>

        <NavLink to="doctors" className='userType block py-2 px-7 rounded font-bold'> Doctor </NavLink>
        <NavLink to="administrations" className='userType block py-2 px-7 rounded font-bold'> Administration </NavLink>

      </div>

      <Outlet />

    </div>
  )
}

