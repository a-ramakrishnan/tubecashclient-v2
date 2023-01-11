import getGoogleOAuthURL from "../../utils/getGoogleURL";

const AddChannel = () => {
  return (
    <div>
      <a href={getGoogleOAuthURL()}>Login with Google</a>
    </div>
  );
};

export default AddChannel;
