import styled from "styled-components";

export const SearchStyle = styled.div`
  display: flex;
  min-height: 45px;
  gap: 20px;
  margin-top: 30px;

  .inp {
    flex: 6;
  }

  .inp input {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    border: 1px solid grey;
    padding: 5px 15px;
  }

  .search {
    flex: 1;
  }

  .searchbox {
    height: 100%;
    width: 55px;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .searchbox img {
    width: 35px;
  }
`;
