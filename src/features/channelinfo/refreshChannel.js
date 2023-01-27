import { useParams } from "react-router-dom";
import axios from "axios";

import { store } from "../../app/store";
const RefreshChannel = () => {
  const { channelId } = useParams();
  const state = store.getState();
  const updateTokens = async () => {
    console.log(channelId);

    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/updateTokens`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const updateChannelStatistics = async () => {
    const postData = {
      channelID: channelId,
    };
    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/fullstats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };
  const updateVideoRevenueStatistics = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/videostats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const dailyVideoRevenueStatistics = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/dailyvideostats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const getPerformanceStatsFromYoutube = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/performancestats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };
  const updateAllVideoInfo = async () => {
    console.log(channelId);

    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo/getFullVideoData`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  return (
    <div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={updateTokens}
        >
          UpdateTokens
        </button>
        <h5>
          Click on the button above before proceeding with any other operation
        </h5>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={updateChannelStatistics}
        >
          Get Full Channel Statistics
        </button>
        <h6>This will only update Full Channel Statistics.</h6>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={updateVideoRevenueStatistics}
        >
          Get Video Revenue Stats
        </button>
        <h6>This will update the video level revenue information</h6>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={dailyVideoRevenueStatistics}
        >
          Get Daily Video Revenue Stats
        </button>
        <h6>This will update the video level revenue information</h6>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={getPerformanceStatsFromYoutube}
        >
          Get Performance Stats
        </button>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={updateAllVideoInfo}
        >
          Update All Video Information
        </button>
      </div>
    </div>
  );
};
export default RefreshChannel;
