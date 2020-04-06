import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { editTruck } from "../../actions/truck";
import { TRUCK_STATUSES, VEHICLE_TYPES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import TextArea from "../common/TextArea";
import styled from "styled-components";
import Input from "../common/Input";

/**
 * @date 3/08/2020
 * @author MJ Kochuk, Steven Wong, Tom Allcock
 * For editing a truck in the manage trucks page.
 * @category Components/Trucks
 * @param truck
 * @constructor
 * @returns {*} The Edit Truck Form component.
 */

const EditTruckForm = styled(Form)`
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

const EditTruck = ({ truck, handleClose }) => {
	const dispatch = useDispatch();
	const truckStatuses = TRUCK_STATUSES;
	const vehicleTypes = VEHICLE_TYPES;

	// Truck will always be null at the start of the page, to avoid errors, setting the trucks default values off the get-go
	if (truck == null) {
		truck = {
			id: 0,
			status: "",
			type: "",
			notice: ""
		};
	}
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				id: truck.id,
				status: truck.status,
				type: truck.type,
				notice: truck.notice
			}}
			onSubmit={values => {
				dispatch(editTruck(values));
				handleClose();
			}}
			validationSchema={Yup.object().shape({
				status: Yup.string()
					.oneOf(truckStatuses)
					.required("Truck Status Required"),
				type: Yup.string()
					.oneOf(vehicleTypes.map(type => type.id))
					.required("Type Required"),
				notice: Yup.string().max(250, "Maximum Length is 250 Characters")
			})}
		>
			{props => (
				<EditTruckForm>
					<Header>Edit Truck {truck.id}</Header>
					<IdDiv>
						<Input
							value={`${props.values.id}`}
							name="id"
							label="Truck ID"
							disabled
							fit
						/>
					</IdDiv>
					<StatusDiv>
						<SelectBox
							value={props.values.status}
							label="Truck Status"
							name="status"
						>
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
						<LoginBtn type="submit">Save</LoginBtn>
					</SubmitDiv>
				</EditTruckForm>
			)}
		</Formik>
	);
};

export default EditTruck;
