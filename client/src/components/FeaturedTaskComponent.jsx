import React from "react";
import "../assets/scss/DashBoard.scss";
import TableComponent from "./TableComponent";

const FeaturedTaskComponent = () => {
	return (
		<div className="featuredTaskSection">
			<div className="tableTitle">FEATURED TASKS FOR TODAY</div>
			<TableComponent />
		</div>
	);
};

export default FeaturedTaskComponent;
