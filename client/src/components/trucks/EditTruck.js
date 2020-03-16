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

	console.log({ truck });

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
					// handleEdit();
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					status: Yup.string().oneOf(truckStatuses),
					// .required(),
					notice: Yup.string().max(250, "Maximum Length is 250 Characters")
				})}
			>
				<Form>
					<h2>Edit Truck</h2>
					<h3>Truck {truck.id}</h3>
					<SelectBox label="Truck Status" name="status">
						<option value={truck.status} />
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
						value={truck.notice}
					/>
					<br />
					<LoginBtn type="submit">Save</LoginBtn>
				</Form>
			</Formik>
		</AddTruckWrap>
	);
};

export default EditTruck;
