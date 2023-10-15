import { Link } from "react-router-dom";

const NavigationBar = () => {
    return(

        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="hidden w-full md:flex md:w-auto justify-end items-center">
            <ul className="nav list-none flex gap-2">
              <li className="nav-item active p-2"><Link to={"/"}>Home</Link></li>
              <li className="nav-item p-2"><Link to={"all-users"}>All users</Link></li>
              <li className="nav-item p-2"><Link to={"add-new"}>Add new user</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
}

export default NavigationBar;