import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const searchApi = createApi ({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/"}),
  endpoints: (build) => ({
    searchPhoto: build.query({
      query:(text)=>({
        url:`/search=${text}`
      })
    })
  })
});

export const {useSearchPhotoQuery} = searchApi