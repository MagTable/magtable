import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { BrixExportWrapper } from "../../styled/magtable/Brix";
import { Field, Form, Formik } from "formik";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import { LoginBtn } from "../../styled/auth/Login";
import SelectBox from "../common/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { DEICE_TRUCK } from "../../actions/constants";
import moment from "moment";
import axios from "axios";
import { setAlert } from "../../actions/alert";

/**
 * Provides a UI for selecting a date range and optional truck id for brix record export
 *
 * @date 3/29/2020
 * @author Arran Woodruff
 * @name BrixExport
 * @category Component/Brix
 * @returns {*} The BrixExport component
 * @constructor
 */
function BrixExport() {
	const dispatch = useDispatch();
	const [downloading, setDownloading] = useState(false);

	const truckIDs = useSelector(state =>
		state.magtable.assignments.map(
			assignment =>
				assignment.equipment.id < 1000 &&
				assignment.equipment.type === DEICE_TRUCK &&
				assignment.equipment.id
		)
	);

	return (
		<Formik
			initialValues={{
				startDate: moment().date(1),
				endDate: moment(),
				truckID: 0
			}}
			onSubmit={async (values, { resetForm }) => {
				const from = values.startDate.format("YYYY-MM-DD");
				const to = values.endDate.format("YYYY-MM-DD");
				const id = values.truckID > 0 ? values.truckID : "";

				setDownloading(true);
				const res = await axios.get(`/brix/export/${from}/${to}/${id}`);

				const downloadLink = document.createElement("a");
				downloadLink.href =
					"data:application/txt," + encodeURIComponent(res.data);
				downloadLink.download = `brix_records_${from}-${to}_${id}.csv`;

				setTimeout(() => {
					setDownloading(false);
					downloadLink.click();
				}, 500);

				if (res.data === "") {
					const truckString = id !== "" ? `for MAG${id}` : "";
					dispatch(
						setAlert(
							`No Records ${truckString} from ${from} to ${to}`,
							"warning"
						)
					);
					resetForm();
					return;
				}

				resetForm();
			}}
		>
			{({ values, errors }) => (
				<BrixExportWrapper>
					<Form>
						<h2>Export Brix Records</h2>
						<label htmlFor={"start_date_input"}>
							<h4>Record Date Range</h4>
							<Field component={DatePicker} />
						</label>
						<SelectBox
							id={"truck_id"}
							errors={errors.truckID}
							value={values.truckID}
							label="*Optional Truck ID"
							name="truckID"
						>
							<option hidden value={"s"} />
							{truckIDs.map(
								id =>
									id && (
										<option key={id} value={id}>
											{id}
										</option>
									)
							)}
						</SelectBox>
						<LoginBtn
							disabled={!values.startDate || !values.endDate || downloading}
							type={"submit"}
						>
							{downloading ? (
								<SpinnerWrap>
									<LoadingImg small className="fas fa-circle-notch" />
								</SpinnerWrap>
							) : (
								"Download"
							)}
						</LoginBtn>
					</Form>
				</BrixExportWrapper>
			)}
		</Formik>
	);
}

export default BrixExport;

const DatePicker = ({ form: { setFieldValue, values } }) => {
	const [focused, setFocused] = useState(null);

	return (
		<DateRangePicker
			startDate={values.startDate}
			startDateId="start_date_input"
			endDate={values.endDate}
			endDateId="your_unique_end_date_id"
			onDatesChange={({ startDate, endDate }) => {
				setFieldValue("startDate", startDate);
				setFieldValue("endDate", endDate);
			}}
			focusedInput={focused}
			onFocusChange={focusedInput => setFocused(focusedInput)}
			displayFormat={"YYYY-MM-DD"}
			hideKeyboardShortcutsPanel={true}
			isOutsideRange={date => date > moment()}
		/>
	);
};
