import { useGetBooksQuery } from "../redux/features/books/bookApi";
import MediaCard from "../components/ui/Card";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  // const user = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books);
  const { data } = useGetBooksQuery(undefined);

  // console.log(11, books?.books);
  const firstTenElements = data?.data?.slice(0, 10);
  return (
    <div className="grid lg:grid-cols-3 lg:grid-cols-1 gap-5 m-auto">
      {books?.books.length > 0
        ? books?.books?.map((book: any, index: number) => (
            <MediaCard key={index} book={book} id={""}></MediaCard>
          ))
        : firstTenElements?.map((book: any, index: number) => (
            <MediaCard key={index} book={book} id={""}></MediaCard>
          ))}
    </div>
  );
};

export default Home;
