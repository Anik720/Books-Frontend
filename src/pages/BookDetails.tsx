import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/bookApi";

import MediaCard from "../components/ui/Card";

const BookDetails = () => {
  const { id } = useParams();
  console.log(6, id);
  const { data } = useSingleBookQuery(id);
  console.log(data);
  return (
    <div>
      <MediaCard book={data?.data} id={id}></MediaCard>
    </div>
  );
};

export default BookDetails;
