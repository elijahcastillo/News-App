import styled from "styled-components";

export const List = styled.div`
  min-height: 700px;

  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
  margin-bottom: 50px;
`;

export const Item = styled.div`
  width: 100%;
  min-height: 180px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.inside};

  .infoTop {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .infoTop p a,
  p {
    color: ${(props) => props.theme.border};
    text-decoration: none;
  }

  .infoBott {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;
  }

  .infoBott button {
    padding: 6px 14px;
    border-radius: 10px;
    border: none;
    background-color: #3dad41;
    box-shadow: 0 4px 0 #369439;
    cursor: pointer;
    color: white;
    transition: all 150 ease-in-out;
  }

  .infoBott button:active {
    box-shadow: none;
    transform: translateY(4px);
  }

  .del:active {
    box-shadow: none;
  }

  .del {
    background-color: #e03d31 !important;
    box-shadow: 0 4px 0 #b43128 !important;
  }
`;
