import { useEffect } from "react";
import Home from "../../components/Home/Home";
import { HomePageWrapper } from "./styled";

const HomePage = ({ data, showModal, exchangeHandler }) => {
  useEffect(() => {
    console.log("HomePage Mount");
    return () => {
      console.log("HomePage UnMount");
    };
  }),
    [];
  return (
    <HomePageWrapper>
      <Home
        data={data}
        showModal={showModal}
        exchangeHandler={exchangeHandler}
      />
    </HomePageWrapper>
  );
};

export default HomePage;
