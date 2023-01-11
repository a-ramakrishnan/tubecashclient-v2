import axios from "axios";
import { useEffect, useState } from "react";

const ChannelStats = () => {
  const [refreshjwt, setRefreshJwt] = useState("");
  const [accessjwt, setAccessJwt] = useState("");

  function getCookie() {
    let cookie = {};
    document.cookie.split(";").forEach((el) => {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    console.log(cookie);
    return cookie;
  }

  useEffect(() => {
    const availableCookies = getCookie();
    setAccessJwt(availableCookies.accessjwt);
    setRefreshJwt(availableCookies.refreshjwt);
  }, []);
  const getPerformanceStatsFromYoutube = async () => {
    console.log(accessjwt, refreshjwt);

    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: "https://tubecash-apiv2.onrender.com/channelstats/performance",
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
    console.log(accessjwt, refreshjwt);

    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: "https://tubecash-apiv2.onrender.com/channelstats/videostats",
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
    console.log(accessjwt, refreshjwt);

    const postData = {
      access: accessjwt,
      refresh: refreshjwt,
    };

    const config = {
      method: "post",
      url: "https://tubecash-apiv2.onrender.com/channelstats/fullstats",
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
