import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { editTruck } from "../../actions/truck";
import { TRUCK_STATUSES } from "../../actions/constants";
import SelectBox from "../common/SelectBox";
import { LoginBtn } from "../../styled/auth/Login";
import TextArea from "../common/TextArea";
import styled from "styled-components";
import Input from "../common/Input";

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

const EditTruckForm = styled(Form)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		"header header"
		"id id"
		"status status"
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

const NoticeDiv = styled.div`
	grid-area: notice;
`;

const SubmitDiv = styled.div`
	grid-area: submit;
`;

const EditTruck = ({ truck }) => {
	const truckStatuses = TRUCK_STATUSES;
	const dispatch = useDispatch();

	if (truck == null) {
		truck = {
			id: 0,
			status: "",
			notice: ""
		};
	}

	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				id: truck.id,
				status: truck.status,
				notice: truck.notice
			}}
			onSubmit={values => {
				dispatch(editTruck(values));
			}}
			validationSchema={Yup.object().shape({
				status: Yup.string()
					.oneOf(truckStatuses)
					.required("Truck Status Required"),
				notice: Yup.string().max(250, "Maximum Length is 250 Characters")
			})}
		>
			{props => (
				<EditTruckForm>
					<Header>Edit Truck {truck.id}</Header>
					<IdDiv>
						<Input
							errors={props.errors.id}
							touched={props.touched.id}
							value={props.values.id}
							name="id"
							type="number"
							label="Truck ID"
							disabled
							fit
						/>
					</IdDiv>
					<StatusDiv>
						<SelectBox
							errors={props.errors.status}
							touched={props.touched.status}
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
