import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoricalSelectorWrapper } from "../../styled/magtable/Historical";
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import { Table, Th, Thead, Tr } from "../../styled/common/Table";
import { BrixTableWrapper } from "../../styled/magtable/Brix";
import { getFormattedDate } from "../brix/BrixManagement";
import moment from "moment";
import {
	getMagtableHistoryList,
	getHistoricalMagtableRecord
} from "../../actions/magtable";

const MagtableHistorySelector = ({ handleClose }) => {
	const dispatch = useDispatch();
	const [focused, setFocused] = useState(false);
	const [date, setDate] = useState(moment());

	useEffect(() => {
		dispatch(getMagtableHistoryList(date.format("YYYY-MM-DD")));
	}, [date, dispatch]);

	const { list, loading } = useSelector(state => state.magtable.historical);

	const handleRecordClick = id => {
		dispatch(getHistoricalMagtableRecord(id));
		handleClose();
	};

	return (
		<HistoricalSelectorWrapper>
			<h2>Previous Magtable Records</h2>
			<label htmlFor={"start_date_input"}>
				<h4>Selected Record Date</h4>
				<SingleDatePicker
					date={date} // momentPropTypes.momentObj or null
					onDateChange={date => {
						setDate(date);
					}}
					focused={focused} // PropTypes.bool
					displayFormat={"YYYY-MM-DD"}
					onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
					id="historical_datepicker" // PropTypes.string.isRequired,
					isOutsideRange={date => date > moment()}
				/>{" "}
			</label>
			<h4>Related Records</h4>
			<BrixTableWrapper>
				{loading ? (
					<SpinnerWrap>
						<LoadingImg className="fas fa-circle-notch" />
					</SpinnerWrap>
				) : (
					<Table>
						<colgroup>
							<col width={"60%"} />
							<col width={"40%"} />
						</colgroup>
						<Thead>
							<Tr>
								<Th>Record Date</Th>
								<Th>Submitted By</Th>
							</Tr>
						</Thead>
						<tbody>
							{list.map(record => (
								<Tr
									style={{ cursor: "pointer" }}
									onClick={() => handleRecordClick(record.id)}
									key={record.id}
								>
									<td>{getFormattedDate(record.date)}</td>
									<td>{record.publishedBy}</td>
								</Tr>
							))}
						</tbody>
					</Table>
				)}
			</BrixTableWrapper>
		</HistoricalSelectorWrapper>
	);
};

export default MagtableHistorySelector;
