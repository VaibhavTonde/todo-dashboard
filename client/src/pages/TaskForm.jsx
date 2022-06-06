import "../assets/scss/TaskForm.scss";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const TaskForm = () => {
	const [taskDetails, setTaskDetails] = useState({
		title: "",
		description: "",
		plannedStartDate: "",
		plannedEndDate: "",
		priority: "",
		initialStatus: "",
		comments: "",
	});

	const onCLickOfPriority = (priority) => {
		setTaskDetails({
			...taskDetails,
			priority: priority,
		});
	};

	const onChangeHandler = (e) => {
		setTaskDetails({
			...taskDetails,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		console.log(taskDetails);
	};

	const onResetHandler = () => {
		setTaskDetails({
			title: "",
			description: "",
			plannedStartDate: "",
			plannedEndDate: "",
			priority: "",
			initialStatus: "",
			comments: "",
		});
	};

	const {
		title,
		description,
		plannedStartDate,
		plannedEndDate,
		priority,
		initialStatus,
		comments,
	} = taskDetails;

	return (
		<div className="taskFormContainer">
			<div className="welcomeContainer">
				<span className="greatings">ADD TASK</span>
			</div>
			<div className="formContainer">
				<form>
					<div className="leftFormContainer">
						<div className="formInput">
							<label>Title</label>
							<input
								type="text"
								name="title"
								value={title}
								onChange={onChangeHandler}
							/>
						</div>
						<div className="formInput">
							<label>Task Description</label>
							<textarea
								name="description"
								value={description}
								onChange={onChangeHandler}
								cols="40"
								rows="5"
							></textarea>
						</div>
						<div className="dateContainer">
							<div className="leftDateContainer">
								<div className="formInput">
									<label>Planned Start Date</label>
									<input
										type="date"
										value={plannedStartDate}
										name="plannedStartDate"
										onChange={onChangeHandler}
									/>
								</div>
							</div>
							<div className="rightDateContainer">
								<div className="formInput">
									<label>Planned End Date</label>
									<input
										type="date"
										value={plannedEndDate}
										name="plannedEndDate"
										onChange={onChangeHandler}
									/>
								</div>
							</div>
						</div>
						<div className="checkboxContainer">
							<FormControlLabel
								control={<Checkbox size="small" />}
								label="SMS Notification"
							/>
							<FormControlLabel
								control={<Checkbox size="small" />}
								label="Email Notification"
							/>
						</div>
					</div>
					<div className="rightFormContainer">
						<div className="priorityContainer">
							<label>Priority</label>
							<Stack direction="row" spacing={2}>
								<Chip
									className="priorityTags"
									label="Low"
									onClick={() => onCLickOfPriority("lowPriority")}
									color="info"
									size="small"
									name="lowPriority"
								/>
								<Chip
									className="priorityTags"
									label="Medium"
									onClick={() => onCLickOfPriority("mediumPriority")}
									color="success"
									size="small"
									name="mediumPriority"
								/>
								<Chip
									className="priorityTags"
									label="High"
									onClick={() => onCLickOfPriority("highPriority")}
									color="warning"
									size="small"
									name="highPriority"
								/>
								<Chip
									className="priorityTags"
									label="Critical"
									onClick={() => onCLickOfPriority("criticalPriority")}
									color="error"
									size="small"
									name="criticalPriority"
								/>
							</Stack>
						</div>
						<div className="formInput">
							<label>Status</label>
							<input
								type="text"
								value={initialStatus}
								name="initialStatus"
								onChange={onChangeHandler}
							/>
						</div>
						<div className="formInput">
							<label>Comments</label>
							<textarea
								name="comments"
								value={comments}
								onChange={onChangeHandler}
								cols="40"
								rows="5"
							></textarea>
						</div>
						{/* <div className="formInput">
							<label>Attachment</label>
							<input type="file" />
						</div> */}
						<div className="buttonContainer">
							<Button variant="contained" onClick={onSubmitHandler}>
								Save
							</Button>
							<Button variant="contained" onClick={onResetHandler}>
								Reset
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TaskForm;
