import { SettingsAccessibility } from "@mui/icons-material";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "../styles/tags.css";

const MyTags = ({tags, settags}) => {



  const onTagsChange = (e) => {
    const custom = e.map(x => x[0] != '#' ? '# ' + x + ' ' : x);
    settags(custom);
  };
  const check = (e) => {
    if (tags.length < 5 && e.length < 20) {
      console.log(tags[tags.length - 1]);
      return true;
    }
    
  };
  return (
    <TagsInput
      value={tags}
      // value={e => diez(e, tags)}
      onChange={onTagsChange}
      beforeAddValidate={check}
      name="userTags"
      placeHolder="Add Tag"
      separators={["Enter", " "]}
      onExisting
    />
  );
};

export default MyTags;
