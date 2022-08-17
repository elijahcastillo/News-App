import styled from "styled-components";

export const List = styled.div`
  min-height: 700px;

  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
`;

export const Item = styled.div`
  width: 100%;
  height: 180px;
  border: 1px solid #474747;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  gap: 5px;
  display: flex;
  flex-direction: column;

  .infoTop {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .infoTop p a {
    color: white;
    text-decoration: none;
  }

  .infoBott {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
  }
`;
