import Home from "../../components/Home/Home";
import { HomePageWrapper } from "./styled";

const HomePage = ({ data }) => {
  return (
    <HomePageWrapper>
      <Home data={data} />
    </HomePageWrapper>
  );
};

export default HomePage;
