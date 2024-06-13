import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { string } from "prop-types";

const  WhoAmIType = {
      playerId: string,
      name: string,
      roles: new Array
}

const LoginResponse = {
      accessToken: string
}

const LoginRequest = {
      email: string,
      password: string
}

const RegitRequest = {
      name: string,
      email: string,
      password: string
}

const RegitResponse = {
      exception: null | Number
}

export const authApi = createApi({
      reducerPath: "authApi",
      baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
      endpoints: (build) => ({
            whoAmI: build.query({
                  query: () => ({
                        url: "whoami",
                        headers: {
                              "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        },
                  })
            }),
            login: build.mutation({
                  query: (body) => ({
                        url: "signin",
                        method: "POST",
                        headers: {
                              "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        },
                        body,
                  })
            }),
            registration: build.mutation({
                  query: (body) => ({
                        url: "signup",
                        method: "POST",
                        body,
                  })
            }),
      }),
});

export const {useWhoAmIQuery, useLoginMutation, useRegistrationMutation, useLazyWhoAmIQuery} = authApi;
