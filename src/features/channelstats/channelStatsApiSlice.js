import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../app/api/apiSlice";

const channelStatsAdapter = createEntityAdapter({});

const initialState = channelStatsAdapter.getInitialState();

export const channelStatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getchannelStats: builder.query({
      query: () => "/channelStats",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedchannelStats = responseData.map((channelStat) => {
          channelStat.id = channelStat._id;
          return channelStat;
        });
        return channelStatsAdapter.setAll(initialState, loadedchannelStats);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "ChannelStat", id: "LIST" },
            ...result.ids.map((id) => ({ type: "ChannelStat", id })),
          ];
        } else return [{ type: "ChannelStat", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetchannelStatsQuery } = channelStatsApiSlice;

// returns the query result object
export const selectchannelStatsResult =
  channelStatsApiSlice.endpoints.getchannelStats.select();

// creates memoized selector
const selectchannelStatsData = createSelector(
  selectchannelStatsResult,
  (channelStatsResult) => channelStatsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllchannelStats,
  selectById: selectchannelStatById,
  selectIds: selectchannelStatIds,
  // Pass in a selector that returns the channelStats slice of state
} = channelStatsAdapter.getSelectors(
  (state) => selectchannelStatsData(state) ?? initialState
);
