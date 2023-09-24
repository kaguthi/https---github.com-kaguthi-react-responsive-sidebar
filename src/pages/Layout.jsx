import { NavLink, Outlet } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import { useState, useEffect } from "react";
function Layout() {
    const [items, setItems] = useState([]);
  return (
    <>
        <div className="sidebar">
            <nav>
                {
                    useEffect(() => {
                        const items = localStorage.getItem("role");
                        if (items) {
                         setItems(items);
                        }
                    }, [])
                }
                {
                    items == 'user' ? // ternary operator
                    <NavLink to={"/"}>< DashboardIcon/> Dashboard</NavLink> :
                    <>
                        <NavLink to={"/"}>< DashboardIcon/> Dashboard</NavLink>
                        <NavLink to={"/users"}>< GroupIcon/>User</NavLink>
                        <NavLink to={"/contact"}>< ContactsIcon/>Contact</NavLink>
                        <NavLink to={"/about"}><InfoIcon/>About</NavLink>
                    </>
                }
            </nav>
        </div>
        <div className="details">
            < Outlet/>
        </div>
    </>
  )
}

export default Layout