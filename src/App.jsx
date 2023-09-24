import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
function App() {
    const [ collapsed, setCollapsed ] = useState(false);
    const [items, setItems] = useState([]);
  return (
    <div id="app" style={({ height: "100vh", minHeight: "400px", display: "flex" })}>
        <Sidebar style={{ height: "100vh" }} collapsed ={collapsed}>
            <Menu>
                {
                    useEffect(() => {
                        const items = localStorage.getItem("role");
                        if (items) {
                        setItems(items);
                        }
                    }, [])
                }
                <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ textAlign: "center" }}
                >
                    {" "}
                    <h2>{items}</h2>
                </MenuItem>
                {
                    items == 'user' ? 
                    <>
                        <MenuItem icon={<HomeOutlinedIcon />} component={<NavLink to="/"/>}>Dashboard</MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon />} component={< NavLink to="about"/>}>About</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                        <MenuItem icon={< LogoutOutlinedIcon/>}>Logout</MenuItem>
                    </>
                    :
                    <>
                        <MenuItem icon={<HomeOutlinedIcon />} component={<NavLink to="/"/>}>Dashboard</MenuItem>
                        <MenuItem icon={<PeopleOutlinedIcon />} component={< NavLink to="/users"/>}>User</MenuItem>
                        <MenuItem icon={<ContactsOutlinedIcon />} component={< NavLink to="contact"/>}>Contacts</MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon />} component={< NavLink to="about"/>}>About</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                        <MenuItem icon={< LogoutOutlinedIcon/>}>Logout</MenuItem>
                    </>
                }
            </Menu>
        </Sidebar>
        <div className="details">
            <Outlet/>
        </div>
    </div>
  )
}

export default App