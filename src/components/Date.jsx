import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import addMonths from "@jsbits/add-months";

const Mydate = () => {
  // var current = new Date();
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();
  // today = dd + "-" + mm + "-" + yyyy;
  // {
  //   console.log("current is: " + current);
  // }
  // {
  //   console.log(today);
  // }

  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      onChange={(date) => {
        setStartDate(date);
        // console.log(date);
      }}
      minDate={addMonths(new Date(), -958)}
      maxDate={addMonths(new Date(), -216)}
      dateFormat="dd-MM-yyyy"
      placeholderText="Click to select a date"
      isClearable
      withPortal
      fixedHeight
      showYearDropdown
      scrollableYearDropdown
      dropdownMode="select"
      // selected="false"
      openToDate={new Date("2001/01/01")}
    />
  );
};

export default Mydate;
