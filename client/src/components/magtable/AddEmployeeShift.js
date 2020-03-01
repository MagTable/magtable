import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addEmployeeShift } from "../../actions/magtable";
import TextInput from "../common/TextInput";

const AddEmployeeShift = () => {
	const dispatch = useDispatch();

	const shiftTimes = [
		{ value: "0000", name: "0000" },
		{ value: "0030", name: "0030" },
		{ value: "0100", name: "0100" },
		{ value: "0130", name: "0130" },
		{ value: "0200", name: "0200" },
		{ value: "0230", name: "0230" },
		{ value: "0300", name: "0300" },
		{ value: "0330", name: "0330" },
		{ value: "0400", name: "0400" },
		{ value: "0430", name: "0430" },
		{ value: "0500", name: "0500" },
		{ value: "0530", name: "0530" },
		{ value: "0600", name: "0600" },
		{ value: "0630", name: "0630" },
		{ value: "0700", name: "0700" },
		{ value: "0730", name: "0730" },
		{ value: "0800", name: "0800" },
		{ value: "0830", name: "0830" },
		{ value: "0900", name: "0900" },
		{ value: "0930", name: "0930" },
		{ value: "1000", name: "1000" },
		{ value: "1030", name: "1030" },
		{ value: "1100", name: "1100" },
		{ value: "1130", name: "1130" },
		{ value: "1200", name: "1200" },
		{ value: "1230", name: "1230" },
		{ value: "1300", name: "1300" },
		{ value: "1330", name: "1330" },
		{ value: "1400", name: "1400" },
		{ value: "1430", name: "1430" },
		{ value: "1500", name: "1500" },
		{ value: "1530", name: "1530" },
		{ value: "1600", name: "1600" },
		{ value: "1630", name: "1630" },
		{ value: "1700", name: "1700" },
		{ value: "1730", name: "1730" },
		{ value: "1800", name: "1800" },
		{ value: "1830", name: "1830" },
		{ value: "1900", name: "1900" },
		{ value: "1930", name: "1930" },
		{ value: "2000", name: "2000" },
		{ value: "2030", name: "2030" },
		{ value: "2100", name: "2100" },
		{ value: "2130", name: "2130" },
		{ value: "2200", name: "2200" },
		{ value: "2230", name: "2230" },
		{ value: "2300", name: "2300" },
		{ value: "2330", name: "2330" }
	];

	const jobRoles = [
		{ value: "Operations Manager", name: "Operations Manager" },
		{ value: "Operations Supervisor", name: "Operations Supervisor" },
		{ value: "CTM", name: "CTM" },
		{ value: "Tower Spotter", name: "Tower Spotter" },
		{ value: "Iceman", name: "Iceman" },
		{ value: "Icehouse", name: "Icehouse" },
		{ value: "Bay Lead", name: "Bay Lead" },
		{ value: "Practical Trainer", name: "Practical Trainer" },
		{ value: "Technician", name: "Technician" },
		{ value: "OJT", name: "OJT" },
		{ value: "OJT-Tower", name: "OJT-Tower" },
		{ value: "Tower Trainer", name: "Tower Trainer" },
		{ value: "Mechanic", name: "Mechanic" }
	];

	return (
		<>
			<Formik
				initialValues={{
					name: "",
					startTime: 0,
					endTime: 0,
					description: "",
					hasAvop: false,
					isGreen: false
				}}
				onSubmit={(values, { resetForm }) => {
					dispatch(addEmployeeShift(values));
					alert(JSON.stringify(values, null, 2));
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					name: Yup.string()
						.matches(
							/^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/,
							"Invalid Characters"
						)
						.required("Required field")
						.min(5, "Minimum Length is 5")
						.max(20, "Maximum Length is 20")
				})}
			>
				{props => (
					<Form>
						<Field name={"name"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors.name}
									touched={props.touched.name}
									value={props.values.name}
									label={"Employee Name"}
								/>
							)}
						</Field>
						<Field as="select" label={"Start Time"} name={"startTime"}>
							<option value="">Select a Start Time</option>
							{shiftTimes.map((time, key) => {
								return (
									<option key={time.value} value={time.value}>
										{time.name}
									</option>
								);
							})}
						</Field>
						<br />
						<Field as="select" label={"End Time"} name={"endTime"}>
							<option value="">Select a End Time</option>
							{shiftTimes.map((time, key) => {
								return (
									<option key={time.value} value={time.value}>
										{time.name}
									</option>
								);
							})}
						</Field>
						<br />
						<Field as="select" label={"Description"} name={"description"}>
							<option value="">Select a Role</option>
							{jobRoles.map((descriptions, key) => {
								return (
									<option key={descriptions.value} value={descriptions.value}>
										{descriptions.name}
									</option>
								);
							})}
						</Field>
						<br />
						<Field name={"hasAvop"} as="checkbox">
							<input type={"checkbox"} name={"hasAvop"} /> Has AVOP?
						</Field>
						<br />
						<Field name={"isGreen"} as="checkbox">
							<input type={"checkbox"} name={"isGreen"} /> Green Pass?
						</Field>
						<br />
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default AddEmployeeShift;
