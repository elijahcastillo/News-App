import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: false,
  articles: [],
  currTheme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : false,
  bookView: false,
  savedPosts: [],
  savedPostsCopy: [],
  savedPostsCount: 0,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (query) => {
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query ? query : "react"}`
    );

    return res;
  } catch (error) {
    return error;
  }
});

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCount: (state, payload) => {
      state.savedPostsCount = payload;
    },
    addPost: (state, payload) => {
      console.log(payload);
      state.savedPosts = payload;
      state.savedPostsCopy = payload;
    },
    filterPost: (state, payload) => {
      state.savedPostsCopy = payload;
    },

    bookView: (state) => {
      state.bookView = !state.bookView;
    },
    changeTheme: (state) => {
      state.currTheme = !state.currTheme;
      localStorage.setItem("theme", state.currTheme);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default NewsSlice.reducer;
export const { bookView, changeTheme, addPost, filterPost, setCount } =
  NewsSlice.actions;
