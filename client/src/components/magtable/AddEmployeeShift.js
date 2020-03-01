import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addEmployeeShift } from "../../actions/magtable";
import TextInput from "../common/TextInput";

const AddEmployeeShift = () => {
	const dispatch = useDispatch();

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
						.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
						.required("Required field")
						.min(5, "Minimum Length is 5")
						.max(20, "Maximum Length is 20"),
					startTime: Yup.string().oneOf(shiftTimes),
					endTime: Yup.string().oneOf(shiftTimes)
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
							<option type="number" value="0700">
								0700
							</option>
							<option type="number" value="0730">
								0730
							</option>
							<option type="number" value="0800">
								0800
							</option>
							<option type="number" value="0830">
								0830
							</option>
							<option type="number" value="0900">
								0900
							</option>
							<option type="number" value="0930">
								0930
							</option>
							<option type="number" value="1000">
								1000
							</option>
							<option type="number" value="1030">
								1030
							</option>
							<option type="number" value="1100">
								1100
							</option>
							<option type="number" value="1130">
								1130
							</option>
							<option type="number" value="1200">
								1200
							</option>
							<option type="number" value="1230">
								1230
							</option>
							<option type="number" value="1300">
								1300
							</option>
							<option type="number" value="1330">
								1330
							</option>
							<option type="number" value="1400">
								1400
							</option>
							<option type="number" value="1430">
								1430
							</option>
							<option type="number" value="1500">
								1500
							</option>
							<option type="number" value="1530">
								1530
							</option>
							<option type="number" value="1600">
								1600
							</option>
							<option type="number" value="1630">
								1630
							</option>
							<option type="number" value="1700">
								1700
							</option>
							<option type="number" value="1730">
								1730
							</option>
							<option type="number" value="1800">
								1800
							</option>
							<option type="number" value="1830">
								1830
							</option>
							<option type="number" value="1900">
								1900
							</option>
							<option type="number" value="1930">
								1930
							</option>
							<option type="number" value="2000">
								2000
							</option>
							<option type="number" value="2030">
								2030
							</option>
							<option type="number" value="2100">
								2100
							</option>
							<option type="number" value="2130">
								2130
							</option>
							<option type="number" value="2200">
								2200
							</option>
							<option type="number" value="2230">
								2230
							</option>
							<option type="number" value="2300">
								2300
							</option>
							<option type="number" value="2330">
								2330
							</option>
						</Field>
						<br />
						<Field as="select" label={"End Time"} name={"endTime"}>
							<option value="">Select a End Time</option>
							<option type="number" value="0500">
								0500
							</option>
							<option type="number" value="0530">
								0530
							</option>
							<option type="number" value="0600">
								0600
							</option>
							<option type="number" value="0630">
								0630
							</option>
							<option type="number" value="0700">
								0700
							</option>
							<option type="number" value="0730">
								0730
							</option>
							<option type="number" value="0800">
								0800
							</option>
							<option type="number" value="0830">
								0830
							</option>
							<option type="number" value="0900">
								0900
							</option>
							<option type="number" value="0930">
								0930
							</option>
							<option type="number" value="1000">
								1000
							</option>
							<option type="number" value="1030">
								1030
							</option>
							<option type="number" value="1100">
								1100
							</option>
							<option type="number" value="1130">
								1130
							</option>
							<option type="number" value="1200">
								1200
							</option>
							<option type="number" value="1230">
								1230
							</option>
							<option type="number" value="1300">
								1300
							</option>
							<option type="number" value="1330">
								1330
							</option>
							<option type="number" value="1400">
								1400
							</option>
							<option type="number" value="1430">
								1430
							</option>
							<option type="number" value="1500">
								1500
							</option>
							<option type="number" value="1530">
								1530
							</option>
							<option type="number" value="1600">
								1600
							</option>
							<option type="number" value="1630">
								1630
							</option>
							<option type="number" value="1700">
								1700
							</option>
							<option type="number" value="1730">
								1730
							</option>
							<option type="number" value="1800">
								1800
							</option>
							<option type="number" value="1830">
								1830
							</option>
							<option type="number" value="1900">
								1900
							</option>
							<option type="number" value="1930">
								1930
							</option>
							<option type="number" value="2000">
								2000
							</option>
							<option type="number" value="2030">
								2030
							</option>
							<option type="number" value="2100">
								2100
							</option>
							<option type="number" value="2130">
								2130
							</option>
							<option type="number" value="2200">
								2200
							</option>
							<option type="number" value="2230">
								2230
							</option>
							<option type="number" value="2300">
								2300
							</option>
							<option type="number" value="2330">
								2330
							</option>
							<option type="number" value="2300">
								0000
							</option>
							<option type="number" value="2330">
								0030
							</option>
							<option type="number" value="2300">
								0100
							</option>
							<option type="number" value="2330">
								0130
							</option>
							<option type="number" value="2300">
								0200
							</option>
							<option type="number" value="2330">
								0230
							</option>
							<option type="number" value="2300">
								0300
							</option>
							<option type="number" value="2330">
								0330
							</option>
							<option type="number" value="2300">
								0400
							</option>
							<option type="number" value="2330">
								0430
							</option>
						</Field>
						<br />
						<Field name={"description"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors.description}
									touched={props.touched.description}
									value={props.values.description}
									label={"Role"}
								/>
							)}
						</Field>
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
