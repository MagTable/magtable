import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addTruck } from "../../actions/truck";
import TextInput from "../common/TextInput";
import { TRUCK_STATUSES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import { AddTruckWrap } from "../../styled/trucks/TruckManagement";
import TextArea from "../common/TextArea";
import CheckBox from "../common/CheckBox";

/**
 * @date 3/08/2020
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * Handles the rendering of the form to add a Truck to the current list of trucks..
 *
 * @constructor
 * @returns {*} The AddTruck component.
 */

const AddTruck = () => {
	const dispatch = useDispatch();
	const truckStatuses = TRUCK_STATUSES;

	//todo figure out formik text area and add it in at the bottom.
	// also change the text input field into a number one purely unless API can parse the string to an int and we can keep easy consistency
	return (
		<AddTruckWrap>
			<Formik
				initialValues={{
					id: "",
					status: "",
					notice: ""
				}}
				onSubmit={(values, { resetForm }) => {
					dispatch(addTruck(values));
					alert(JSON.stringify(values, null, 2));
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					id: Yup.string()
						.matches(/\d/, "Invalid Number")
						.required("Required Field"),
					status: Yup.string()
						.oneOf(truckStatuses)
						.required(),
					notice: Yup.string().max(250, "Maximum Length is 250 Characters")
				})}
			>
				{props => (
					<Form>
						<h2>Add Trucks</h2>
						<Field name="id">
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors.id}
									touched={props.touched.id}
									type={"number"}
									value={props.values.id}
									label={"Truck ID"}
									fit
								/>
							)}
						</Field>
						<SelectBox label="Truck Status" name="status">
							<option value="">Select a Truck Status</option>
							{truckStatuses.map(status => {
								return (
									<option key={status} value={status}>
										{status}
									</option>
								);
							})}
						</SelectBox>
						<TextArea
							label="Notice"
							name="notice"
							rows="6"
							placeholder="Any truck notices go here..."
						/>
						<br />
						{/*todo checkbox for service vehicle or not?*/}
						{/*<CheckBox name={"service"}>Service Vehicle?</CheckBox>*/}
						<LoginBtn type="submit">Add Truck</LoginBtn>
					</Form>
				)}
			</Formik>
		</AddTruckWrap>
	);
};

export default AddTruck;