import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
`;

function App() {
  const getApi = async () => {
    const response = await axios.get(
      "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts"
    );
    console.log(response.data);
  };

  return (
    <>
      <Button
        onClick={() => {
          getApi();
        }}
      >
        에이피 아이 호출
      </Button>
    </>
  );
}

export default App;
