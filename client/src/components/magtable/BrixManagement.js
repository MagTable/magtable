import {
	BrixForm,
	BrixTableTitle,
	BrixTableWrapper,
	BrixWrapper,
	BrixWrapperTitle
} from "../../styled/magtable/Brix";
import { Table, Th, Thead, Tr } from "../../styled/common/Table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import { Formik } from "formik";
import * as Yup from "yup";
import { addBrixRecord } from "../../actions/brix";
import styled from "styled-components";
import { LoginBtn } from "../../styled/auth/Login";
import Input from "../common/Input";

// todo we should start moving some of our form styled components into a folder now.
const SubmitDiv = styled.div`
	grid-area: submit;
`;

function BrixManagement() {
	const dispatch = useDispatch();
	const {
		selectedBrixRecords,
		selectedTruckID,
		loading,
		addingBrixRecord
	} = useSelector(state => state.brix);
	const getFormattedDate = date => {
		date = new Date(date);
		const months = [
			"JAN",
			"FEB",
			"MAR",
			"APR",
			"MAY",
			"JUN",
			"JUL",
			"AUG",
			"SEP",
			"OCT",
			"NOV",
			"DEC"
		];

		const d = date.getDate().toString();
		const m = months[date.getMonth()];
		const y = date.getFullYear().toString();
		const h = date.getHours();
		const min = date.getMinutes();
		return (
			d +
			"-" +
			m +
			"-" +
			y +
			"@" +
			h.toString().padStart(2, "0") +
			":" +
			min.toString().padStart(2, "0")
		);
	};

	return (
		<BrixWrapper>
			<BrixWrapperTitle>
				Brix Management - MAG{selectedTruckID}
			</BrixWrapperTitle>
			<Formik
				initialValues={{
					nozzle: "30.3",
					type1: "52.4",
					type4: "32.5",
					litersPurged: "105",
					timeMeasured: new Date()
				}}
				onSubmit={(values, { resetForm }) => {
					dispatch(addBrixRecord(selectedTruckID, { ...values }));
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					nozzle: Yup.number()
						.min(8.5, "Nozzle Min is 8.5")
						.max(42, "Nozzle Max is 42.0")
						.required("Nozzle Required"),
					type1: Yup.number()
						.min(50.5, "Type 1 Min is 50.5")
						.max(53.5, "Type1  Max is 53.5")
						.required("Type 1 Required"),
					type4: Yup.number()
						.min(30.5, "Type 4 Min is 30.5")
						.max(33.5, "Type 4 Max is 33.5")
						.required("Type 4 Required"),
					litersPurged: Yup.number()
						.min(0, "Min Purged is 0")
						.max(1000, "Max Purged is 1000")
						.required("Liters Required"),
					timeMeasured: Yup.date().required("Required")
				})}
			>
				{props => (
					<BrixForm>
						<Input
							errors={props.errors.type1}
							touched={props.touched.type1}
							value={props.values.type1}
							id={"type1"}
							label={"Type 1 Tank"}
							type={"number"}
							name="type1"
							accentColor={"var(--type1)"}
							icon={{
								iconClass: "fa-eye-dropper fa-lg"
							}}
							fit
						/>
						<Input
							errors={props.errors.type4}
							touched={props.touched.type4}
							value={props.values.type4}
							id={"type4"}
							label={"Type 4 Tank"}
							type={"number"}
							name="type4"
							accentColor={"var(--type4)"}
							icon={{
								iconClass: "fa-eye-dropper fa-lg"
							}}
							fit
						/>
						<Input
							errors={props.errors.nozzle}
							touched={props.touched.nozzle}
							value={props.values.nozzle}
							id={"nozzle"}
							label={"Nozzle"}
							type={"number"}
							name={"nozzle"}
							accentColor={"var(--type1)"}
							icon={{
								iconClass: "fa-shower fa-lg"
							}}
							fit
						/>
						<Input
							errors={props.errors.litersPurged}
							touched={props.touched.litersPurged}
							value={props.values.litersPurged}
							id="purged"
							label="Liters Purged"
							type="number"
							name="litersPurged"
							icon={{
								iconClass: "fa-water fa-lg"
							}}
							fit
						/>
						<SubmitDiv>
							<LoginBtn disabled={addingBrixRecord} type={"submit"}>
								{addingBrixRecord ? (
									<SpinnerWrap>
										<LoadingImg small className="fas fa-circle-notch" />
									</SpinnerWrap>
								) : (
									"Submit"
								)}
							</LoginBtn>
						</SubmitDiv>
					</BrixForm>
				)}
			</Formik>
			<BrixTableTitle>Previous Records</BrixTableTitle>
			<BrixTableWrapper>
				{loading ? (
					<SpinnerWrap>
						<LoadingImg className="fas fa-circle-notch" />
					</SpinnerWrap>
				) : (
					<Table>
						<colgroup>
							<col width={"30%"} />
							<col width={"15%"} />
							<col width={"15%"} />
							<col width={"15%"} />
							<col width={"25%"} />
						</colgroup>
						<Thead>
							<Tr>
								<Th>Time Measured</Th>
								<Th>Nozzle</Th>
								<Th>Type 1 Tank</Th>
								<Th>Type 4 Tank</Th>
								<Th>Liters Purged</Th>
							</Tr>
						</Thead>
						<tbody>
							{selectedBrixRecords.map(record => (
								<Tr key={record.id}>
									<td>{getFormattedDate(record.timeMeasured)}</td>
									<td>{record.nozzle}</td>
									<td>{record.type1}</td>
									<td>{record.type4}</td>
									<td>{record.litersPurged}</td>
								</Tr>
							))}
						</tbody>
					</Table>
				)}
			</BrixTableWrapper>
		</BrixWrapper>
	);
}

export default BrixManagement;
