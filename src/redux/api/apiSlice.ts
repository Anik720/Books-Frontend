import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-backend-qgkc.onrender.com/api/v1",
  }),
  tagTypes: ["books"],
  endpoints: () => ({}),
});
