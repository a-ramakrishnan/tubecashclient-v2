import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChannelStats = () => {
  const { atoken, rtoken } = useParams();

  console.log(atoken, rtoken);
  const [refreshjwt, setRefreshJwt] = useState("");
  const [accessjwt, setAccessJwt] = useState("");

  useEffect(() => {
    setRefreshJwt(rtoken);
    setAccessJwt(atoken);
  }, [atoken, rtoken]);
  const getPerformanceStatsFromYoutube = async () => {
    console.log(accessjwt, refreshjwt);

    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelstats/performance`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const getVideoStatsFromYoutube = async () => {
    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelstats/videostats`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const getFullStatsFromYoutube = async () => {
    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelstats/fullstats`,
      headers: {
        "Content-Type": "application/json",
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
          onClick={getPerformanceStatsFromYoutube}
        >
          Get Performance Stats
        </button>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={getVideoStatsFromYoutube}
        >
          Get Video Stats
        </button>
      </div>
      <div>
        <button
          className="space__bottom button__possize"
          onClick={getFullStatsFromYoutube}
        >
          Get Full Stats
        </button>
      </div>
    </div>
  );
};
export default ChannelStats;
