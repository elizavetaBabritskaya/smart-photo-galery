import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { string } from 'prop-types';

const request = {
  image: string
}

export const searchApi = createApi ({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/"}),
  endpoints: (build) => ({
    searchPhoto: build.query({
      query:(text)=>({
        url:`/search=${text}`,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      })
    }),
    similarPhoto: build.mutation({
      query:(photo)=>({
        url:`/similarity`,
        method:"POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
      },
      body:JSON.stringify({image:photo}),
      })
    }),
  })
});

export const {useSearchPhotoQuery, useSimilarPhotoMutation} = searchApi