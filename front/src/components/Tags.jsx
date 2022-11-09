import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "../styles/tags.css";

const MyTags = () => {
  const [selected, setSelected] = useState([]);

  const onTagsChange = (e) => {
    setSelected(e);
  };
  const check = (e) => {
    if (selected.length < 5 && e.length < 20) {
      console.log(selected[0]);
      return true;
    }
  };
  return (
    <TagsInput
      value={selected}
      onChange={onTagsChange}
      beforeAddValidate={check}
      name="userTags"
      placeHolder="Enter Tag"
    />
  );
};

export default MyTags;
