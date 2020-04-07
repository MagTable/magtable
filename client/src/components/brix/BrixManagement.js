import {
	BrixForm,
	BrixTableTitle,
	BrixTableWrapper,
	BrixWrapper,
	BrixWrapperTitle,
	ChartRowDataItem
} from "../../styled/magtable/Brix";
import { Table, Th, Thead, Tr } from "../../styled/common/Table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import { Field, Formik } from "formik";
import TextInput from "../common/TextInput";
import * as Yup from "yup";
import { addBrixRecord } from "../../actions/brix";
import { LoginBtn } from "../../styled/auth/Login";

export const getFormattedDate = date => {
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

/**
 *
 * The Brix Management component.
 *
 * @date 2020-03-24
 * @author Arran Woodruff
 * @name BrixManagement
 * @category Component/Brix
 * @returns {*} The BrixManagement component
 * @constructor
 */
function BrixManagement() {
	const dispatch = useDispatch();
	const {
		selectedBrixRecords,
		selectedTruckID,
		selectedTruckPrimary,
		loading,
		addingBrixRecord,
		dailyMixChartRow
	} = useSelector(state => state.brix);

	const nozzleMinError = `Nozzle Min is ${dailyMixChartRow?.brix}`;

	return (
		<BrixWrapper>
			<BrixWrapperTitle>
				Brix Management - MAG{selectedTruckID}
			</BrixWrapperTitle>
			<Formik
				initialValues={{
					nozzle: "",
					type1: "",
					type4: "",
					litersPurged: "",
					timeMeasured: new Date()
				}}
				onSubmit={(values, { resetForm }) => {
					dispatch(
						addBrixRecord(selectedTruckID, selectedTruckPrimary, { ...values })
					);
					resetForm();
				}}
				validationSchema={Yup.object().shape({
					nozzle: Yup.number()
						.typeError("Must be a Number")
						.min(dailyMixChartRow?.brix, nozzleMinError)
						.max(42, "Nozzle Max is 42.0")
						.required("Nozzle Required"),
					type1: Yup.number()
						.typeError("Must be a Number")
						.min(50.5, "Type 1 Min is 50.5")
						.max(53.5, "Type1  Max is 53.5")
						.required("Type 1 Required"),
					type4: Yup.number()
						.typeError("Must be a Number")
						.min(30.5, "Type 4 Min is 30.5")
						.max(33.5, "Type 4 Max is 33.5")
						.required("Type 4 Required"),
					litersPurged: Yup.number()
						.typeError("Must be a Number")
						.min(0, "Min Purged is 0")
						.max(1000, "Max Purged is 1000")
						.required("Liters Required"),
					timeMeasured: Yup.date().required("Required")
				})}
			>
				{({ values, errors, touched }) => (
					<BrixForm>
						<Field name="type1">
							{({ field }) => (
								<TextInput
									{...field}
									errors={errors.type1}
									touched={touched.type1}
									value={values.type1}
									id={"type1"}
									label={"Type 1 Tank"}
									accentColor={"var(--type1)"}
									icon={{
										iconClass: "fa-eye-dropper"
									}}
								/>
							)}
						</Field>
						<Field name={"type4"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={errors.type4}
									touched={touched.type4}
									value={values.type4}
									id={"type4"}
									label={"Type 4 Tank"}
									accentColor={"var(--type4)"}
									icon={{
										iconClass: "fa-eye-dropper"
									}}
								/>
							)}
						</Field>
						<Field name={"nozzle"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={errors.nozzle}
									touched={touched.nozzle}
									value={values.nozzle}
									id={"nozzle"}
									label={"Nozzle"}
									accentColor={"var(--type1)"}
									icon={{
										iconClass: "fa-shower"
									}}
								/>
							)}
						</Field>
						<Field name={"litersPurged"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={errors.litersPurged}
									touched={touched.litersPurged}
									value={values.litersPurged}
									id={"purged"}
									label={"Liters Purged"}
									icon={{
										iconClass: "fa-water"
									}}
								/>
							)}
						</Field>
						<ChartRowDataItem error={errors.nozzle === nozzleMinError}>
							{dailyMixChartRow ? (
								<span>Minimum Nozzle Brix: {dailyMixChartRow.brix}</span>
							) : (
								<span>
									Validation Data Not Available, Please Verify Manually.
								</span>
							)}
						</ChartRowDataItem>
						<ChartRowDataItem id={""}>
							Operator: {selectedTruckPrimary ? selectedTruckPrimary : "N/A"}
						</ChartRowDataItem>
						<div id={"submit"}>
							<LoginBtn disabled={addingBrixRecord} type={"submit"}>
								{addingBrixRecord ? (
									<SpinnerWrap>
										<LoadingImg small className="fas fa-circle-notch" />
									</SpinnerWrap>
								) : (
									"Submit"
								)}
							</LoginBtn>
						</div>
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
