import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "../Board/Board";
import TaskDetails from "../Task-details/details";

const Main = (props) => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Board {...props} />} />
      <Route path={"/tasks/:taskID"} element={<TaskDetails {...props} />} />
    </Routes>
  );
};

export default Main;
