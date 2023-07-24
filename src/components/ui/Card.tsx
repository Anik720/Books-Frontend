import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useAddToWishListMutation,
  useDeleteBookMutation,
  // useUpdateBookMutation,
} from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hooks";
import axios from "axios";
export type IBook = {
  _id?: string | null;
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews: Array<string>;
  images: string;
  wishlist: Array<object>;
  currentBooksReading: Array<object>;
  readingStatus: Array<object>;

  //   seller: Types.ObjectId | IUser
};

interface MediaCardProps {
  book: IBook;
  id?: string;
}
const MediaCard: React.FC<MediaCardProps> = ({ book, id }) => {
  // console.log(10, book);

  const [addToWishList] = useAddToWishListMutation();
  // const [updateBook] = useUpdateBookMutation();
  const { user } = useAppSelector((state) => state.user);
  let navigate = useNavigate();

  const [deleteBook] = useDeleteBookMutation();
  const handleShowBookDetails = () => {
    navigate(`/book-detail/${book._id}`);
  };

  const handleBookDelete = () => {
    deleteBook(book._id);
  };
  const handleAddToWishList = async () => {
    let fetchedWishlist = await axios.get(
      `https://book-backend-qgkc.onrender.com/api/v1/books/get-wishlist?email=${user?.email}`
    );
    console.log(34, fetchedWishlist);
    if (fetchedWishlist?.data?.data) {
      let WishList = fetchedWishlist?.data?.data;
      console.log(38, WishList);
      let copyWishlist = [...WishList?.wishlist, book];
      let obj = {
        email: user.email,
        wishlist: copyWishlist,
      };
      addToWishList({ data: obj });
    } else {
      let obj = {
        email: user.email,
        wishlist: book,
      };
      addToWishList({ data: obj });
    }
  };
  const handleCurrentlyReading = async () => {
    let fetchedData = await axios.get(
      `https://book-backend-qgkc.onrender.com/api/v1/books/get-wishlist?email=${user?.email}`
    );
    console.log(34, fetchedData);
    if (fetchedData?.data?.data) {
      let WishList = fetchedData?.data?.data;
      console.log(38, WishList);
      let copyWishlist = [...WishList?.currentBooksReading, book];
      let obj = {
        email: user.email,
        currentBooksReading: copyWishlist,
      };
      addToWishList({ data: obj });
    } else {
      let obj = {
        email: user.email,
        currentBooksReading: book,
      };
      addToWishList({ data: obj });
    }
  };

  // const handleReadStatus = async () => {
  //   let fetchedData = await axios.get(
  //     `http://localhost:5000/api/v1/books/${book._id}`
  //   );
  //   console.log(34, fetchedData);
  //   if (fetchedData?.data?.data) {
  //     let fetchedBook = fetchedData?.data?.data;
  //     console.log(38, fetchedBook);
  //     let copyWishlist = [
  //       ...fetchedBook?.readingStatus,
  //       { book_id: book._id, status: true, user: user?.email },
  //     ];
  //     let obj = {
  //       _id: book._id,
  //       readingStatus: copyWishlist,
  //     };
  //     updateBook(obj);
  //   } else {
  //     let obj = {
  //       _id: book._id,
  //       readingStatus: { book_id: book._id, status: true, user: user?.email },
  //     };
  //     updateBook(obj);
  //   }
  // };
  // console.log(23, book.readingStatus, book._id);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={book?.images}
          title="green iguana"
        />
        <CardContent>
          <div className="flex justify-around">
            <Typography gutterBottom variant="h5" component="div">
              Book Title:{book?.title}
            </Typography>

            {/* {book?.readingStatus?.map((status: any) => {
              JSON.stringify(status?.book_id) === JSON.stringify(book._id) ? (
                <Typography
                  gutterBottom
                  component="p"
                  style={{ cursor: "pointer" }}
                >
                  Completed Reading!
                </Typography>
              ) : (
                <Typography
                  gutterBottom
                  component="p"
                  onClick={handleReadStatus}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Mark as finised reading!
                </Typography>
              );
            })} */}
          </div>
          <Typography variant="body2" color="text.secondary">
            Book Author:{book?.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Book Genre:{book?.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Book Publication Date:{book?.publication_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddToWishList} className="text-sm">
            Add To WishList
          </Button>
          <Button size="small" onClick={handleCurrentlyReading}>
            currently reading
          </Button>
          <Button size="small" onClick={handleShowBookDetails}>
            Learn More
          </Button>
        </CardActions>
      </Card>

      {id &&
        book?.reviews.map((review: any, index: any) => (
          <Typography variant="body2" color="text.secondary">
            Review {index}: {review}
          </Typography>
        ))}
      {id ? (
        <div>
          <NavLink to={`/edit-book/${book?._id}`}>
            <Button variant="contained">Edit</Button>
          </NavLink>

          <Button variant="contained" onClick={handleBookDelete}>
            Delete
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MediaCard;
