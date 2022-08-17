import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Search from "./components/Search";
import { Container } from "./css/Container.styled";
import { GlobalStyles } from "./css/GlobalStyle.styled";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postReducer from "./features/NewsSlice";
import { ThemeProvider, withTheme } from "styled-components";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const theme = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Search />
          <NewsList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
