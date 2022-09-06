import "../styles/index.scss";
import styled from "styled-components";

const Foot = styled.div`
  .main-footer {
    text-align: right;
    height: 5%;
    color: white;
    font-weight: thin;
    padding: 20px 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .main-footer p {
    bottom: 0;
  }
`;

const Footbar = () => {
  return (
    <Foot>
      <footer className="main-footer">
        <p>Copyright: anel-bou, chzabakh</p>
      </footer>
    </Foot>
  );
};

export default Footbar;
