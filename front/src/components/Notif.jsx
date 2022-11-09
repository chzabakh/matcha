import React, { useState } from "react";
import styled from "styled-components";


// x viewed your profile
// x liked you
// x liked you back
// x unliked you

const NotificationStyles = styled.div`
  
  .beautify {
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
    font-family: 'Courier New', Courier, monospace;
    max-width: 500px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Viewed = () => {

  return (
    <NotificationStyles>
      <p className="beautify">
      xxxxxx viewed your profile
      </p>
    </NotificationStyles>
  );
};

export const Liked = () => {

  return (
    <NotificationStyles>
      <p className="beautify">
      xxxxxx liked you
      </p>
    </NotificationStyles>
  );
};

export const LikedBack = () => {

  return (
    <NotificationStyles>
      <p className="beautify">
      xxxxxxx liked you back
      </p>
    </NotificationStyles>
  );
};

export const Unliked = () => {

  return (
    <NotificationStyles>
      <p className="beautify">
      xxxxxxxxx unliked you
      </p>
    </NotificationStyles>
  );
};

export default Viewed;
// export default Liked;
// export default LikedBack;
// export default Unliked;
