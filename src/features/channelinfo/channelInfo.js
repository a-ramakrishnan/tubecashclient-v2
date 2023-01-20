import axios from "axios";
import { useEffect, useState } from "react";
import Channel from "./Channel";

import { store } from "../../app/store";

const ChannelInfo = () => {
  const [channels, setChannels] = useState([]);
  let content;
  const state = store.getState();
  useEffect(() => {
    setTimeout(async () => {
      const config = {
        method: "GET",
        url: `${process.env.REACT_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      await axios(config).then((response) => {
        setChannels(response.data);
        console.log("Response is", response.data);
      });
    }, 1000);
  }, [state.auth.token]);

  if (channels) {
    const tableContent = channels?.length
      ? channels.map((channel) => (
          <Channel key={channel._id} channelId={channel} />
        ))
      : null;

    content = (
      <>
        <h1> Channel Information </h1>
        <table className="table table--channels">
          <thead className="table__thead">
            <tr>
              <th scope="col" className="table__th user__username">
                ChannelName
              </th>
              <th scope="col" className="table__th user__username">
                Channel ID
              </th>
              <th scope="col" className="table__th user__username">
                Date & time of addition
              </th>
              <th scope="col" className="table__th user__username">
                Google ID
              </th>
              <th scope="col" className="table__th user__username">
                Last Updated Date
              </th>
              <th scope="col" className="table__th user__username">
                Scope
              </th>
              <th scope="col" className="table__th user__edit">
                Refresh Tokens
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </>
    );
  }

  return content;
};
export default ChannelInfo;
