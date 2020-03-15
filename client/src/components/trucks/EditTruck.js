import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addTruck, editTruck } from "../../actions/truck";
import { TRUCK_STATUSES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import { AddTruckWrap } from "../../styled/trucks/TruckManagement";
import TextArea from "../common/TextArea";
import TextInput from "../common/TextInput";

/**
 * @date 3/08/2020
 * @author MJ Kochuk, Steven Wong, Tom Allcock
 * @module Component
 */

/**
 * For editing a truck in the manage trucks page.
 * @constructor
 * @returns {*} The AddTruck component.
 */

const EditTruck = ({ truck }) => {
	const truckStatuses = TRUCK_STATUSES;
	const dispatch = useDispatch();

	if (truck == null) {
		truck = {
			id: 5,
			status: "",
			notice: ""
		};
	}

	let editId = truck.id,
		editNotice = truck.notice,
		editStatus = truck.status;

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		console.log("hello");
		const editedTruck = {
			id: editId,
			status: editStatus,
			notice: editNotice
		};
		console.log(editedTruck);
		dispatch(editTruck(editedTruck));
	}

	function handleChangeOption(event) {
		// editStatus = event.target.value;
		console.log(event);
	}

	console.log(truck.status);

	return (
		<AddTruckWrap>
			<Formik
				initialValues={{
					status: truck.status,
					notice: truck.notice.text
				}}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}
				// onSubmit={handleEdit}
				validationSchema={Yup.object().shape({
					status: Yup.string().oneOf(truckStatuses),
					// .required(),
					notice: Yup.string().max(250, "Maximum Length is 250 Characters")
				})}
			>
				<Form>
					<h2>Edit Truck</h2>
					<h3>Truck {truck.id}</h3>
					<select label="Truck Status" name="status" value={truck.status}>
						{truckStatuses.map(truckStatus => {
							return truck.status === truckStatus ? (
								<option key={truckStatus} value={truckStatus} selected={true}>
									{truckStatus}
								</option>
							) : (
								<option key={truckStatus} value={truckStatus}>
									{truckStatus}
								</option>
							);
						})}
					</select>

					<Field name="notice">
						{({ field }) => (
							<TextArea
								{...field}
								label="Notice"
								name="notice"
								rows="6"
								placeholder="Any truck notices go here..."
								value={truck.notice}
							/>
						)}
					</Field>

					<br />
					<LoginBtn type="submit">Save</LoginBtn>
				</Form>
			</Formik>
		</AddTruckWrap>
	);
};

export default EditTruck;
