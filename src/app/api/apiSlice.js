import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://tubecash-apiv2.onrender.com" }),
  tagTypes: ["ChannelStats", "User"],
  endpoints: (builder) => ({}),
});
