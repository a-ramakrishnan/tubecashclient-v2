import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Channel = ({ channelId }) => {
  const navigate = useNavigate();
  if (channelId) {
    const refreshTokens = () =>
      navigate(`/dash/channelinfo/${channelId.channelID}`);

    return (
      <tr className="table__row user">
        <td className={`table__cell`}>{channelId.channelName}</td>
        <td className={`table__cell`}>{channelId.channelID}</td>
        <td className={`table__cell`}>{channelId.createdAt}</td>
        <td className={`table__cell`}>{channelId.googleID}</td>
        <td className={`table__cell`}>{channelId.lastUpdatedDate}</td>
        <td className={`table__cell`}>{channelId.scope}</td>

        <td className={`table__cell`}>
          <button className="icon-button table__button" onClick={refreshTokens}>
            <FontAwesomeIcon icon={faRefresh} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default Channel;
