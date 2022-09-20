import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import styled from "styled-components";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import addMonths from "@jsbits/add-months";



const Mydate = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    // <Wrapper>
      <DatepickerStyled
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
        // className="datePecker"
      />
    // </Wrapper>
  );
};

export default Mydate;

const DatepickerStyled = styled(DatePicker)`
    background: red ;
   
`;