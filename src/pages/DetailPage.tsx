import { useParams } from "react-router";

const DetailPage = () => {
  const { postId } = useParams();

  console.log(postId)

  return <div>DetailPage</div>;
};

export default DetailPage;
