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
import { Field, Formik } from "formik";
import TextInput from "../common/TextInput";
import { OkButton } from "../../styled/common/FormControl";
import * as Yup from "yup";
import { addBrixRecord } from "../../actions/magtable";

function BrixManagement() {
	const dispatch = useDispatch();
	const selectedBrixRecords = useSelector(
		state => state.magtable.selectedBrixRecords
	);
	const brixRecordsLoading = useSelector(
		state => state.magtable.brixRecordsLoading
	);
	const getFormattedDate = date => {
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
		return d + "-" + m + "-" + y + "@" + h + ":" + min;
	};

	return (
		// 	<BrixWrapper>
		// 		<BrixWrapperTitle>Brix Management</BrixWrapperTitle>
		// 		<Formik
		// 			initialValues={{
		// 				nozzle: "30.3",
		// 				type1: "52.4",
		// 				type4: "32.5",
		// 				litersPurged: "105",
		// 				timeMeasured: new Date()
		// 			}}
		// 			onSubmit={(values, { resetForm }) => {
		// 				console.log(values);
		// 				dispatch(addBrixRecord(5, { id: Math.random(), ...values }));
		// 				resetForm();
		// 			}}
		// 			validationSchema={Yup.object().shape({
		// 				nozzle: Yup.number()
		// 					.min(8.5, "Nozzle Min is 8.5")
		// 					.max(42, "Nozzle Max is 42.0")
		// 					.required("Required"),
		// 				type1: Yup.number()
		// 					.min(50.5, "Type 1 Min is 50.5")
		// 					.max(53.5, "Type1  Max is 53.5")
		// 					.required("Required"),
		// 				type4: Yup.number()
		// 					.min(30.5, "Type 4 Min is 30.5")
		// 					.max(33.5, "Type 4 Max is 33.5")
		// 					.required("Required"),
		// 				litersPurged: Yup.number()
		// 					.min(0, "Min Purged is 0")
		// 					.max(1000, "Max Purged is 1000")
		// 					.required("Required"),
		// 				timeMeasured: Yup.date().required("Required")
		// 			})}
		// 		>
		// 			{({ values, errors, touched }) => (
		// 				<BrixForm>
		// 					<Field name="type1">
		// 						{({ field }) => (
		// 							<TextInput
		// 								{...field}
		// 								errors={errors.type1}
		// 								touched={touched.type1}
		// 								value={values.type1}
		// 								id={"type1"}
		// 								label={"Type 1 Tank"}
		// 								type={"number"}
		// 								accentColor={"var(--type1)"}
		// 								icon={{
		// 									iconClass: "fa-eye-dropper"
		// 								}}
		// 							/>
		// 						)}
		// 					</Field>
		// 					<Field name={"type4"}>
		// 						{({ field }) => (
		// 							<TextInput
		// 								{...field}
		// 								errors={errors.type4}
		// 								touched={touched.type4}
		// 								value={values.type4}
		// 								id={"type4"}
		// 								label={"Type 4 Tank"}
		// 								type={"number"}
		// 								accentColor={"var(--type4)"}
		// 								icon={{
		// 									iconClass: "fa-eye-dropper"
		// 								}}
		// 							/>
		// 						)}
		// 					</Field>
		// 					<Field name={"nozzle"}>
		// 						{({ field }) => (
		// 							<TextInput
		// 								{...field}
		// 								errors={errors.nozzle}
		// 								touched={touched.nozzle}
		// 								value={values.nozzle}
		// 								id={"nozzle"}
		// 								label={"Nozzle"}
		// 								type={"number"}
		// 								accentColor={"var(--type1)"}
		// 								icon={{
		// 									iconClass: "fa-shower"
		// 								}}
		// 							/>
		// 						)}
		// 					</Field>
		// 					<Field name={"litersPurged"}>
		// 						{({ field }) => (
		// 							<TextInput
		// 								{...field}
		// 								errors={errors.litersPurged}
		// 								touched={touched.litersPurged}
		// 								value={values.litersPurged}
		// 								id={"purged"}
		// 								label={"Liters Purged"}
		// 								type={"number"}
		// 								icon={{
		// 									iconClass: "fa-water"
		// 								}}
		// 							/>
		// 						)}
		// 					</Field>
		// 					<div id={"submit"}>
		// 						<OkButton type={"submit"}>Submit</OkButton>
		// 					</div>
		// 				</BrixForm>
		// 			)}
		// 		</Formik>
		// 		{/*<div id={"date"}>*/}
		// 		{/*	<TextInput type={"date"} value={""} />*/}
		// 		{/*	<TextInput type={"time"} value={""} />*/}
		// 		{/*</div>*/}
		// 		<BrixTableTitle>Previous Records</BrixTableTitle>
		// 		<BrixTableWrapper>
		// 			{brixRecordsLoading ? (
		// 				<SpinnerWrap>
		// 					<LoadingImg className="fas fa-circle-notch" />
		// 				</SpinnerWrap>
		// 			) : (
		// 				<Table>
		// 					<colgroup>
		// 						<col width={"35%"} />
		// 						<col width={"15%"} />
		// 						<col width={"15%"} />
		// 						<col width={"15%"} />
		// 						<col width={"20%"} />
		// 					</colgroup>
		// 					<Thead>
		// 						<Tr>
		// 							<Th>Time Measured</Th>
		// 							<Th>Nozzle</Th>
		// 							<Th>Type 1 Tank</Th>
		// 							<Th>Type 4 Tank</Th>
		// 							<Th>Liters Purged</Th>
		// 						</Tr>
		// 					</Thead>
		// 					<tbody>
		// 						{selectedBrixRecords.map(record => (
		// 							<Tr key={record.id}>
		// 								<td>{getFormattedDate(record.timeMeasured)}</td>
		// 								<td>{record.nozzle}</td>
		// 								<td>{record.type1}</td>
		// 								<td>{record.type4}</td>
		// 								<td>{record.litersPurged}</td>
		// 							</Tr>
		// 						))}
		// 					</tbody>
		// 				</Table>
		// 			)}
		// 		</BrixTableWrapper>
		// 	</BrixWrapper>
		<h2>test</h2>
	);
}

export default BrixManagement;
