import styled from "styled-components";

export const Nav = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  margin-top: 10px;

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }

  .logo h1 {
    color: transparent;
    background: linear-gradient(
      90deg,
      rgba(227, 149, 230, 1) 0%,
      rgba(163, 125, 238, 1) 39%,
      rgba(98, 99, 247, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.5em;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .links img {
    height: 45%;
    cursor: pointer;
  }
`;
