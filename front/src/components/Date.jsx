import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import addMonths from "@jsbits/add-months";

const DatePickerStyled = styled(DatePicker)`
  background: transparent;
  cursor: pointer;
  width: 100%;
  padding-left: 0.5rem;
`;

const Mydate = ({
startDate, setStartDate

}) => {
  // {console.log(startDate)}
  return (
    <DatePickerStyled
      minDate={addMonths(new Date(), -958)}
      maxDate={addMonths(new Date(), -216)}
      dateFormat="dd-MM-yyyy"
      placeholderText="Click to select a date"
      isClearable
      openToDate={new Date("2000/01/01")}
      withPortal
      fixedHeight
      showYearDropdown
      scrollableYearDropdown
      dropdownMode="select"
      selected={startDate}
      onChange={(date) => setStartDate(date)} 
      />
  );
};

export default Mydate;
