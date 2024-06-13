import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const Api = createApi ({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
  endpoints: (build) => ({
    getPhotos: build.query({
      query:()=>({
          url: "/files",
          headers: {
              "Content-Type": "application/json",
          },
          timeout: 1000,
      })
    }),

    addPhotos: build.mutation({
      query:(photo)=>({
          url: "/files",
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: photo
      })
    }),

    // similarPhoto: build.query({
    //   query:()=>({
    //     url: "/files",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })
    // })
  })
});

export const {useGetPhotosQuery, useAddPhotosMutation} = Api