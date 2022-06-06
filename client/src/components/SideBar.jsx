import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

import "../assets/scss/SideBar.scss";

const SideBar = () => {
	return (
		<div className="sideBar">
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<li>
						<PersonIcon className="icon" />
						<span>Tasks</span>
					</li>
					<li>
						<InventoryIcon className="icon" />
						<span>Products</span>
					</li>
					<li>
						<EventNoteIcon className="icon" />
						<span>Orders</span>
					</li>
					<li className="sidebar-li  hover">
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<QueryStatsIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon className="icon" />
						<span>Notification</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<HealthAndSafetyIcon className="icon" />
						<span>System Health</span>
					</li>
					<p className="title">USER</p>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<li>
						<AccountCircleIcon className="icon" />
						<span>Profile</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default SideBar;
