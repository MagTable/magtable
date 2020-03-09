import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addEmployeeShift } from "../../actions/magtable";
import TextInput from "../common/TextInput";
import { ALL_POSITIONS } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import CheckBox from "../common/CheckBox";
import styled from "styled-components";
import { LoginBtn } from "../../styled/auth/Login";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff
 * @module Component
 */

/**
 *
 * Handles the rendering of the form to add an Employee Shift to the current shifts in the EmployeeListItems.
 *
 * @constructor
 * @returns {*} The AddEmployeeShift component.
 */

const AddEmployeeForm = styled(Form)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		"header header"
		"name name"
		"start end"
		"position position"
		"noavop green"
		"submit submit";
`;

const Header = styled.h2`
	margin: 0;
	grid-area: header;
`;

const NameDiv = styled.div`
	grid-area: name;
`;

const StartTimeDiv = styled.div`
	grid-area: start;
`;

const EndTimeDiv = styled.div`
	grid-area: end;
`;

const PositionDiv = styled.div`
	grid-area: position;
`;

const SubmitDiv = styled.div`
	grid-area: submit;
`;

const GreenPassDiv = styled.div`
	grid-area: green;
	min-width: 10rem;
`;

const NoAvopDiv = styled.div`
	grid-area: noavop;
	min-width: 10rem;
`;

const AddEmployeeShift = ({ setShowModal }) => {
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

	return (
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
				setShowModal(false);
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
					.required("Required"),
				endTime: Yup.string()
					.oneOf(shiftTimes)
					.required("Required"),
				description: Yup.string()
					.oneOf(jobRoles)
					.required("Required")
			})}
		>
			{props => (
				<AddEmployeeForm>
					<Header>Add Employee Shift</Header>
					<NameDiv>
						<Field name={"name"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors.name}
									touched={props.touched.name}
									value={props.values.name}
									label={"Employee Name"}
									fit
								/>
							)}
						</Field>
					</NameDiv>
					<StartTimeDiv>
						<SelectBox
							errors={props.errors.startTime}
							touched={props.touched.startTime}
							value={props.values.startTime}
							label="Start Time"
							name="startTime"
						>
							<option value="" />
							{shiftTimes.map(time => (
								<option key={time} value={time}>
									{time}
								</option>
							))}
						</SelectBox>
					</StartTimeDiv>
					<EndTimeDiv>
						<SelectBox
							errors={props.errors.endTime}
							touched={props.touched.endTime}
							value={props.values.endTime}
							label="End Time"
							name="endTime"
						>
							<option value="" />
							{shiftTimes.map(
								time =>
									parseInt(time) > parseInt(props.values.startTime) && (
										<option key={time} value={time}>
											{time}
										</option>
									)
							)}
						</SelectBox>
					</EndTimeDiv>
					<PositionDiv>
						<SelectBox
							errors={props.errors.description}
							touched={props.touched.description}
							value={props.values.description}
							label="Position"
							name="description"
						>
							<option value="" />
							{jobRoles.map(role => {
								return (
									<option key={role} value={role}>
										{role}
									</option>
								);
							})}
						</SelectBox>
					</PositionDiv>
					<GreenPassDiv>
						<CheckBox name={"noAvop"}> No AVOP?</CheckBox>
					</GreenPassDiv>
					<NoAvopDiv>
						<CheckBox name={"isGreen"}> Green Pass?</CheckBox>
					</NoAvopDiv>
					<SubmitDiv>
						<LoginBtn type="submit">Submit</LoginBtn>
					</SubmitDiv>
				</AddEmployeeForm>
			)}
		</Formik>
	);
};

export default AddEmployeeShift;
