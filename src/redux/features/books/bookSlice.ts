import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

interface IUserState {
  books: Array<object>;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  books: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const searchBook = createAsyncThunk(
  "books/searchBook",
  async ({ inputValue }: any) => {
    //  fetch(
    //     `http://localhost:5000/api/v1/books?searchTerm=${inputValue}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Handle the data received from the API
    //       console.log(28, data);
    //     })
    //     .catch((error) => {
    //       // Handle errors if any
    //       console.error("Error fetching data:", error);
    //     });
    //   console.log(34, result);

    let result = await axios.get(
      `https://book-backend-qgkc.onrender.com/api/v1/books?searchTerm=${inputValue}`
    );
    console.log(34, result?.data?.data);
    return result?.data?.data;
  }
);

const searchBookSlice = createSlice({
  name: "books ",
  initialState,
  reducers: {
    // setU: (state, action: PayloadAction<string | null>) => {
    //   state.user.email = action.payload;
    // },
    // setLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(searchBook.fulfilled, (state, action) => {
        // alert(66);
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(searchBook.rejected, (state, action) => {
        state.books = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

// export const {} = searchBookSlice.actions;

export default searchBookSlice.reducer;
