import { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouting: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  );
};
