import { PanoramaSharp, Paragliding } from "@mui/icons-material"

export const columnHeader = [
    { field: "taskHeader", headerName: "TASK", width: 200 },
    { field: "priority", headerName: "PRIORITY", width: 200 },
    {
        field: "currentStatus", headerName: "STATUS", width: 200, renderCell: (parmas) => {
            return <div className={`cellWithStatus ${parmas.row.currentStatus}`}>{parmas.row.currentStatus}</div>
        }
    },
    { field: "plannedEndDate", headerName: "PLANNED END DATE", width: 200 }
]


export const dataRows = [{
    id: 1,
    taskHeader: "Task 1",
    priority: "Medium",
    currentStatus: "Not Started",
    plannedEndDate: "11-10-2022",
    actualEndDate: "",
}, {
    id: 2,
    taskHeader: "Task 1",
    priority: "Medium",
    currentStatus: "Not Started",
    plannedEndDate: "11-10-2022",
    actualEndDate: "",
}, {
    id: 3,
    taskHeader: "Task 1",
    priority: "Medium",
    currentStatus: "Not Started",
    plannedEndDate: "11-10-2022",
    actualEndDate: "",
}, {
    id: 4,
    taskHeader: "Task 1",
    priority: "Medium",
    currentStatus: "Not Started",
    plannedEndDate: "11-10-2022",
    actualEndDate: "",
}
]