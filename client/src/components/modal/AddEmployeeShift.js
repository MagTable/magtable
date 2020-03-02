import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addEmployeeShift } from "../../actions/magtable";
import TextInput from "../common/TextInput";
import { ALL_POSITIONS } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import CheckBox from "../common/CheckBox";

/**
 * @date 2/28/2020
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * Handles the rendering of the form to add an Employee Shift to the current shifts in the EmployeeListItems.
 *
 * @constructor
 * @returns {*} The AddEmployeeShift component.
 */
const AddEmployeeShift = ({ showModal, setModal }) => {
	const dispatch = useDispatch();

	// All potential shift times going by every 30 minutes following 24hr format standards.
	const shiftTimes = [
		"0000",
		"0030",
		"0100",
		"0130",
		"0200",
		"0230",
		"0300",
		"0330",
		"0400",
		"0430",
		"0500",
		"0530",
		"0600",
		"0630",
		"0700",
		"0730",
		"0800",
		"0830",
		"0900",
		"0930",
		"1000",
		"1030",
		"1100",
		"1130",
		"1200",
		"1230",
		"1300",
		"1330",
		"1400",
		"1430",
		"1500",
		"1530",
		"1600",
		"1630",
		"1700",
		"1730",
		"1800",
		"1830",
		"1900",
		"1930",
		"2000",
		"2030",
		"2100",
		"2130",
		"2200",
		"2230",
		"2300",
		"2330"
	];

	// All the possible job roles within the company. These go back as "description" to the backend.
	const jobRoles = ALL_POSITIONS;

	if (!this.props.show) {
		return null;
	}
	return (
		<>
			<Formik
				initialValues={{
					name: "",
					startTime: "",
					endTime: "",
					description: "",
					noAvop: false,
					isGreen: false
				}}
				onSubmit={(values, { resetForm }) => {
					dispatch(addEmployeeShift(values));
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					name: Yup.string()
						.matches(
							/^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+)|([A-za-z]+[\s]{1}[A-za-z]+[\s]{1}[A-za-z]+))$/,
							"Invalid Characters"
						)
						.required("Required field")
						.min(5, "Minimum Length is 5")
						.max(20, "Maximum Length is 20"),
					startTime: Yup.string()
						.oneOf(shiftTimes)
						.required("Required Start Time"),
					endTime: Yup.string()
						.oneOf(shiftTimes)
						.required("Required End Time"),
					description: Yup.string()
						.oneOf(jobRoles)
						.required("Required Position")
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
						{/* todo style the select boxes and options. Make sure to include somewhere for Errors like TextInput has. */}
						<SelectBox label="Start Time" name="startTime">
							<option value="">Select a Start Time</option>
							{shiftTimes.map((time, key) => {
								return (
									<option key={time} value={time}>
										{time}
									</option>
								);
							})}
						</SelectBox>
						<br />
						{/*/!* todo style the select boxes and options. Make sure to include somewhere for Errors like TextInput has.*!/*/}
						<SelectBox label="End Time" name="endTime">
							<option value="">Select a End Time</option>
							{shiftTimes.map((time, key) => {
								return (
									<option key={time} value={time}>
										{time}
									</option>
								);
							})}
						</SelectBox>
						<br />
						{/*/!* todo style the select boxes and options. Make sure to include somewhere for Errors like TextInput has.*!/*/}
						<SelectBox label="Position" name="description">
							<option value="">Select a Role</option>
							{jobRoles.map((role, key) => {
								return (
									<option key={role} value={role}>
										{role}
									</option>
								);
							})}
						</SelectBox>
						<br />
						{/* todo style the checkboxes.*/}
						<CheckBox name={"noAvop"}> No AVOP?</CheckBox>
						<br />
						{/* todo style the checkboxes. */}
						<CheckBox name={"isGreen"}> Green Pass?</CheckBox>
						<br />
						{/* todo style the submit button. Maybe just make it exactly the same as our login one? */}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default AddEmployeeShift;
