import { GridLoader } from "react-spinners";

function ErrorMessage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-20">
      <GridLoader color="red" />
      <div className="text-[50px]">Oops</div>
      <div>나중에 다시 시도해보세요!</div>
    </div>
  );
}

export default ErrorMessage;
