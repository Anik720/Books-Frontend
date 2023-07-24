import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
import MediaCard from "../components/ui/Card";

const CurrentlyReading = () => {
  const { user } = useAppSelector((state) => state.user);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  useEffect(() => {
    const func = async () => {
      let fetchedWishlist = await axios.get(
        `https://book-backend-qgkc.onrender.com/api/v1/books/get-wishlist?email=${user?.email}`
      );

      setCurrentlyReading(fetchedWishlist?.data?.data?.currentBooksReading);
    };
    func();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 lg:grid-cols-1 gap-5 m-auto">
      {currentlyReading?.map((book: any, index: number) => (
        <MediaCard key={index} book={book} id={""}></MediaCard>
      ))}
    </div>
  );
};

export default CurrentlyReading;
