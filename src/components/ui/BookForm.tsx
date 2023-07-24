import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { usePostBookMutation } from "../../redux/features/books/bookApi";
import { ToastContainer, toast } from "react-toastify";
const BookForm = () => {
  const [postBook] = usePostBookMutation();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    // You can handle the form submission logic here
    console.log(data);
    postBook({ data });

    toast("Book Added Successfully!");
  };

  return (
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
              defaultValue="Harun"
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
              defaultValue="Darun"
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
              defaultValue="Karun"
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
          <Grid item xs={12}>
            <Controller
              name="publication_date"
              control={control}
              defaultValue="7/11/23"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Publication Date"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="reviews"
              control={control}
              defaultValue={["Hello"]}
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
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="images"
              control={control}
              defaultValue="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
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
  );
};

export default BookForm;
