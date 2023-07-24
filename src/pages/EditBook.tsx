import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/bookApi";
import EditBookForm from "../components/ui/EditBookForm";

const EditBook = () => {
  const { id } = useParams();
  const { data } = useSingleBookQuery(id);
  return (
    <div>
      <EditBookForm data={data} id={id}></EditBookForm>
    </div>
  );
};

export default EditBook;
