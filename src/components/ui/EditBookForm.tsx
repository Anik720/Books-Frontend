import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { useUpdateBookMutation } from "../../redux/features/books/bookApi";
import { ToastContainer, toast } from "react-toastify";
// export type IBook = {
//   _id?: string | null;
//   title: string;
//   author: string;
//   genre: string;
//   publication_date: string;
//   reviews: Array<string>;
//   images: string;
//   wishlist: Array<object>;
//   currentBooksReading: Array<object>;
//   readingStatus: Array<object>;

//   //   seller: Types.ObjectId | IUser
// };

// interface MediaCardProps {
//   data: IBook;
//   id?: string;
// }
const EditBookForm = ({ data, id }: any) => {
  const [updateBook, { isSuccess }] = useUpdateBookMutation();
  console.log(26, data);
  const { handleSubmit, control } = useForm({
    defaultValues: data?.data, // Use the editData as default values
  });

  const onSubmit = (value: any) => {
    // You can handle the form submission logic here
    console.log(20, value);
    value._id = id;
    updateBook(value);

    toast("Book  updated Successfully!");
  };
  console.log(25, data?.data?.title);
  console.log(28, isSuccess);
  return (
    <>
      {data?.data ? (
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Submit Book Data
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={data?.data?.title}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Title"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="author"
                  control={control}
                  defaultValue={data?.data?.author}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Author"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="genre"
                  control={control}
                  defaultValue={data?.data?.genre}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Genre"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Controller
                  name="publication_date"
                  control={control}
                  defaultValue={data?.data?.publication_date}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Publication Date"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <Controller
                  name="reviews"
                  control={control}
                  defaultValue={data?.data?.publication_date}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Reviews"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  )}
                />
              </Grid> */}
              <Grid item xs={12}>
                <Controller
                  name="images"
                  control={control}
                  defaultValue={data?.data?.images}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Image URL"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <ToastContainer />
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default EditBookForm;
