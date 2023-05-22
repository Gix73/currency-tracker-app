import spinner from "@assets/Spinner.svg";
import { LoadingWrapper } from "./styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={spinner} alt="Preloader" />
    </LoadingWrapper>
  );
};

export default Loading;
