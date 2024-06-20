import { __APPLICATION_CONFIG__ } from "@/app/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthRequestPayload, AuthResponseModel } from "./auth";

export const AuthAPI = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({ baseUrl: __APPLICATION_CONFIG__.api.baseUrl }),
  tagTypes: ["Authorization"],
  endpoints: (build) => ({
    PostRegisterUser: build.mutation<AuthResponseModel, AuthRequestPayload>({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Authorization"],
    }),
  }),
});

export const { usePostRegisterUserMutation } = AuthAPI;
