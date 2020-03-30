import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TRUCK_STATUSES, VEHICLE_TYPES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import TextArea from "../common/TextArea";
import styled from "styled-components";
import Input from "../common/Input";
import { addTruck } from "../../actions/truck";

/**
 * @date 3/08/2020
 * @author Steven Wong
 * Handles the rendering of the form to add a Truck to the current list of trucks.
 * @category Components/Trucks
 * @constructor
 * @returns {*} The AddTruck form component.
 */

const AddTruckForm = styled(Form)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		"header header"
		"id id"
		"status type"
		"notice notice"
		"submit submit";
`;

const Header = styled.h2`
	margin: 0;
	grid-area: header;
`;

const IdDiv = styled.div`
	grid-area: id;
`;

const StatusDiv = styled.div`
	grid-area: status;
`;

const TypeDiv = styled.div`
	grid-area: type;
`;

const NoticeDiv = styled.div`
	grid-area: notice;
`;

const SubmitDiv = styled.div`
	grid-area: submit;
`;

function AddTruck() {
	const dispatch = useDispatch();
	const truckStatuses = TRUCK_STATUSES;
	const vehicleTypes = VEHICLE_TYPES;

	return (
		<Formik
			initialValues={{
				id: "",
				status: "",
				type: "",
				notice: ""
			}}
			onSubmit={(values, { resetForm }) => {
				dispatch(addTruck(values));
				resetForm();
			}}
			validationSchema={Yup.object().shape({
				id: Yup.string()
					.matches(
						/^([0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9])$/,
						"Invalid Number"
					)
					.required("ID Required"),
				status: Yup.string()
					.oneOf(truckStatuses)
					.required("Status Required"),
				type: Yup.string()
					.oneOf(vehicleTypes.map(type => type.id))
					.required("Type Required"),
				notice: Yup.string().max(250, "Maximum Length is 250 Characters")
			})}
		>
			{props => (
				<AddTruckForm>
					<Header>Add Trucks</Header>
					<IdDiv>
						<Input
							value={props.values.id}
							name="id"
							type="number"
							label="Truck ID"
							fit
							min={0}
							max={999}
						/>
					</IdDiv>
					<StatusDiv>
						<SelectBox
							value={props.values.status}
							label="Truck Status"
							name="status"
						>
							<option value="" />
							{truckStatuses.map(status => {
								return (
									<option key={status} value={status}>
										{status}
									</option>
								);
							})}
						</SelectBox>
					</StatusDiv>
					<TypeDiv>
						<SelectBox value={props.values.type} label="Truck Type" name="type">
							<option value="" />
							{vehicleTypes.map(type => {
								return (
									<option key={type.id} value={type.id}>
										{type.value}
									</option>
								);
							})}
						</SelectBox>
					</TypeDiv>
					<NoticeDiv>
						<TextArea
							label="Notice"
							name="notice"
							rows="6"
							placeholder="Any truck notices go here..."
						/>
					</NoticeDiv>
					<SubmitDiv>
						<LoginBtn type="submit">Add Truck</LoginBtn>
					</SubmitDiv>
				</AddTruckForm>
			)}
		</Formik>
	);
}

export default AddTruck;
