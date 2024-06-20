import { AuthSliceActions } from "@/app/store/slices/auth.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const AllActions = {
  ...AuthSliceActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
