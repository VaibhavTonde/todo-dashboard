import React from "react";
import "../assets/scss/TaskListPage.scss";
import DataTable from "../components/DataTable";

const TaskListPage = () => {
	return (
		<div className="container">
			<div className="welcomeContainer">
				<span className="greatings">TASKS</span>
			</div>
			<div className="mainContainer">
				<DataTable />
			</div>
		</div>
	);
};

export default TaskListPage;
