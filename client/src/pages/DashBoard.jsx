import React from "react";
import "../assets/scss/DashBoard.scss";

import Widgets from "../components/Widgets";
import FeaturedTaskComponent from "../components/FeaturedTaskComponent";
import FetauredChart from "../components/FetauredChart";

const DashBoard = () => {
	return (
		<div className="dashboard">
			<div className="welcomeContainer">
				<span className="dateSection">Tuesday,May 1</span>
				<span className="greatings">Hello User!</span>
			</div>
			<Widgets />
			<div className="mainContainer">
				<div className="chartContainer">
					<FetauredChart />
				</div>
				<FeaturedTaskComponent />
			</div>
		</div>
	);
};

export default DashBoard;
