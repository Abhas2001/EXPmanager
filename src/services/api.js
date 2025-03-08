import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query"



export const api = createApi({

    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:""
    }),
    endpoints:(builder)=>({
           getPosts : builder.query({query: () => "posts"}),
           createPOST : builder.mutation({
           query:(newpost)=>({
            url:"posts",
            method:"POST",
            body: newpost,
            
           })
           }) ,
    })
    

})