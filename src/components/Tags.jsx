import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import styled from "styled-components";
import "../styles/tags.css";

const MyTags = () => {
  const [selected, setSelected] = useState([]);

  const check = (tags) => {
    if (selected.length < 5) {
      setSelected(tags);
    }
  };
  const isValidate = (e) => {
    console.log(e);
    if (selected.length <= 5) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <TagsInput
      value={selected}
      // onChange={setSelected}
      onChange={check}
      name="userTags"
      placeHolder="Enter tags"
      beforeAddValidate={isValidate}
    />
  );
};

export default MyTags;
