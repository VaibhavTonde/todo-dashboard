import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = () => {
	const rows = [
		{
			taskId: 1,
			taskHeader: "Task 1",
			status: "InProgress",
			priotity: "High",
			targetDate: "01-01-2022",
		},
		{
			taskId: 2,
			taskHeader: "Task 2",
			status: "NotStarted",
			priotity: "High",
			targetDate: "01-01-2022",
		},
		{
			taskId: 3,
			taskHeader: "Task 3",
			status: "InProgress",
			priotity: "High",
			targetDate: "01-01-2022",
		},
		{
			taskId: 4,
			taskHeader: "Task 4",
			status: "InProgress",
			priotity: "High",
			targetDate: "01-01-2022",
		},
		{
			taskId: 5,
			taskHeader: "Task 5",
			status: "Completed",
			priotity: "High",
			targetDate: "01-01-2022",
		},
	];

	return (
		<TableContainer component={Paper} className="tableSection">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Task Name</TableCell>
						<TableCell align="center">Priotity</TableCell>
						<TableCell align="right">Target Date</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.taskId}>
							<TableCell>{row.taskHeader}</TableCell>
							<TableCell align="center">
								<span className={`status ${row.priotity}`}>{row.priotity}</span>
							</TableCell>
							<TableCell align="right">{row.targetDate}</TableCell>
							<TableCell align="right">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
