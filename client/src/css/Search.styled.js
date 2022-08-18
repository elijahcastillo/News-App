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
    padding: 5px 15px;
    border: none;
    background-color: ${(props) => props.theme.search};
    color: ${(props) => props.theme.textd};
  }

  .inp input:focus {
    outline: none;
    box-shadow: 1px 2px 3px black;
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
