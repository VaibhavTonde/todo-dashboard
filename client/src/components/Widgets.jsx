import React from "react";
import "../assets/scss/Widgets.scss";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widget">
				<div className="left">
					<span className="title">TOTAL TASKS</span>
					<span className="counter">25</span>
					<span className="link">See all tasks</span>
				</div>
				<div className="right">
					<div className="percentage positive">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" style={{ color: "" }} />
				</div>
			</div>
			<div className="widget">
				<div className="left">
					<span className="title">COMPLETED</span>
					<span className="counter">11</span>
					<span className="link">See all completed tasks</span>
				</div>
				<div className="right">
					<div className="percentage positive">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" />
				</div>
			</div>
			<div className="widget">
				<div className="left">
					<span className="title">IN PROGRESS</span>
					<span className="counter">3</span>
					<span className="link">See all in progress tasks</span>
				</div>
				<div className="right">
					<div className="percentage negative">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" />
				</div>
			</div>
			<div className="widget">
				<div className="left">
					<span className="title">NOT STARTED</span>
					<span className="counter">5</span>
					<span className="link">See all not started tasks</span>
				</div>
				<div className="right">
					<div className="percentage negative">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" />
				</div>
			</div>
			<div className="widget">
				<div className="left">
					<span className="title">ON HOLD</span>
					<span className="counter">6</span>
					<span className="link">See all on hold tasks</span>
				</div>
				<div className="right">
					<div className="percentage positive">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" />
				</div>
			</div>
			<div className="widget">
				<div className="left">
					<span className="title">OVER DUE</span>
					<span className="counter">0</span>
					<span className="link">See all over due tasks</span>
				</div>
				<div className="right">
					<div className="percentage positive">
						<KeyboardArrowUpIcon />
						20%
					</div>
					<PersonOutlineIcon className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Widgets;
