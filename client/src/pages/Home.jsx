import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DashBoard from "./DashBoard";
import TaskListPage from "./TaskListPage";
import Login from "./Login";
import TaskForm from "./TaskForm";

import "../assets/scss/Home.scss";

const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="homeContainer">
				<SideBar />
				{/* <DashBoard /> */}
				{/* <TaskListPage /> */}
				<TaskForm />
			</div>
			{/* <Login /> */}
		</div>
	);
};

export default Home;
