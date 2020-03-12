import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addTruck, editTruck } from "../../actions/truck";
import TextInput from "../common/TextInput";
import { TRUCK_STATUSES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import { AddTruckWrap } from "../../styled/trucks/TruckManagement";
import TextArea from "../common/TextArea";
import CheckBox from "../common/CheckBox";
import { Input } from "../../styled/common/FormControl";

/**
 * @date 3/08/2020
 * @author MJ Kochuk, Steven Wong, Tom Allcock
 * @module Component
 */

/**
 * For editing a truck in the manage trucks page.
 *
 * @constructor
 * @returns {*} The AddTruck component.
 */

const EditTruck = ({ truck }) => {
	const truckStatuses = TRUCK_STATUSES;
	const dispatch = useDispatch();
	let editId, editNotice, editStatus;

	if (truck === null) {
		truck = {
			id: 5,
			status: "",
			notice: ""
		};
	}

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		const editedTruck = {
			id: editId,
			status: editStatus,
			notice: editNotice
		};
		console.log(editedTruck);
		dispatch(editTruck(editedTruck));
	}

	return (
		<AddTruckWrap>
			<Formik
				initialValues={{
					id: truck.id === null ? "" : truck.id,
					status: truck.status === null ? "" : truck.status,
					notice: truck.notice === null ? "" : truck.notice
				}}
				onSubmit={() => handleEdit()}
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
				<Form>
					<h2>Edit Truck</h2>
					{/*Todo get the truck's ID editable, right now, this causes the page to be empty.*/}
					{/*<Field name="id">*/}
					{/*	<input value={truck.id} />*/}
					{/*	/!*{({ field }) => (*!/*/}
					{/*	/!*	<TextInput*!/*/}
					{/*	/!*		{...field}*!/*/}
					{/*	/!*		errors={props.errors.id}*!/*/}
					{/*	/!*		touched={props.touched.id}*!/*/}
					{/*	/!*		type={"number"}*!/*/}
					{/*	/!*		value={props.values.id}*!/*/}
					{/*	/!*		label={"Truck ID"}*!/*/}
					{/*	/!*		fit*!/*/}
					{/*	/!*	/>*!/*/}
					{/*	/!*)}*!/*/}
					{/*</Field>*/}

					<SelectBox label="Truck Status" name="status">
						<option value="" selected={truck.status}>
							Select a Truck Status
						</option>
						{truckStatuses.map(truckStatus => {
							return (
								<option key={truckStatus} value={truckStatus}>
									{truckStatus}
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
					<LoginBtn type="submit">Save</LoginBtn>
				</Form>
			</Formik>
		</AddTruckWrap>
	);
};

export default EditTruck;
