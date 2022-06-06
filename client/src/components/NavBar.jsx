import "../assets/scss/NavBar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="logoContainer">
				<span className="logo">CRUD APP</span>
			</div>
			<div className="items">
				<div className="item">
					<LanguageOutlinedIcon className="icon" />
					English
				</div>
				<div className="item">
					<NotificationsNoneOutlinedIcon className="icon" />
					<div className="counter">2</div>
				</div>
				<div className="item">
					<img
						className="avatar"
						src="https://upload.wikimedia.org/wikipedia/commons/7/72/Ranbir_Kapoor_promoting_Bombay_Velvet.jpg"
						alt=""
					></img>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
