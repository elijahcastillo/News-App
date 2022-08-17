import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Search from "./components/Search";
import { Container } from "./css/Container.styled";
import { GlobalStyles } from "./css/GlobalStyle.styled";

import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const theme = {
  light: {
    background: "white",
    text: "black",
    border: "black",
    search: "#f2f2f2",
  },
  dark: {
    background: "#171717",
    text: "white",
    border: "#6e6d6d",
    search: "#262626",
  },
};

function App() {
  const { currTheme } = useSelector((state) => state.posts);
  return (
    <ThemeProvider theme={currTheme ? theme.light : theme.dark}>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Search />
        <NewsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
