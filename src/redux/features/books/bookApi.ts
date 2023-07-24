import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postBook: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addToWishList: builder.mutation({
      query: ({ data }) => ({
        url: "/books/add-to-wishlist",
        method: "PUT",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: (item) => ({
        url: `/books/${item._id}`,
        method: "PATCH",
        body: item,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddToWishListMutation,
} = bookApi;
