import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Search from "./components/Search";
import { Container } from "./css/Container.styled";
import { GlobalStyles } from "./css/GlobalStyle.styled";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postReducer from "./features/NewsSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Search />
        <NewsList />
      </Container>
    </Provider>
  );
}

export default App;
