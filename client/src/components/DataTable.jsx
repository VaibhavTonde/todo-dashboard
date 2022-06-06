import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../assets/scss/DataTable.scss";
import { columnHeader, dataRows } from "../dataTableSource";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
const DataTable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="actionContainer">
						<div className="viewIcon">
							<VisibilityRoundedIcon />
						</div>
						<div className="editIcon">
							<EditRoundedIcon />
						</div>
						<div className="deleteIcon">
							<DeleteRoundedIcon />
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="dataTable">
			<DataGrid
				rows={dataRows}
				columns={columnHeader.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
