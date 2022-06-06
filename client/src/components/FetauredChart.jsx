import React from "react";
import "../assets/scss/Widgets.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chart from "react-apexcharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";

const FetauredChart = () => {
	const chartData = {
		series: [11, 3, 5, 6],
		options: {
			chart: {
				width: 380,
				type: "donut",
			},
			dataLabels: {
				enabled: false,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							show: false,
						},
					},
				},
			],
			legend: {
				horizontalAlign: "center",
				offsetY: 0,
				position: "bottom",
			},
		},
	};
	return (
		<div className="charts">
			<div className="topContainer">
				<span className="title">TASK STATISTICS</span>
				<MoreVertIcon fontSize="small" style={{ cursor: "pointer" }} />
			</div>
			<div className="chartMainContainer">
				<Chart
					options={chartData.options}
					series={chartData.series}
					type="donut"
					width={300}
				/>
			</div>
			<div className="summary">
				<div className="item">
					<div className="itemTitle">Daily</div>
					<div className="itemResult positive">
						<KeyboardArrowDownIcon fontSize="small" />
						<div className="resultStats">12 %</div>
					</div>
				</div>
				<div className="item">
					<div className="itemTitle">Weekly</div>
					<div className="itemResult positive">
						<KeyboardArrowDownIcon fontSize="small" />
						<div className="resultStats">12 %</div>
					</div>
				</div>
				<div className="item">
					<div className="itemTitle">Monthly</div>
					<div className="itemResult positive">
						<KeyboardArrowDownIcon fontSize="small" />
						<div className="resultStats">12 %</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FetauredChart;
