import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>

      <h1>Welcome!</h1>
      <p>
        <Link to="/dash/addchannel">Add a Channel</Link>
      </p>
      <p>
        <Link to="/dash/channelstats">View Channel</Link>
      </p>
      <p>
        <Link to="/dash/users">View User Settings</Link>
      </p>
      <p>
        <Link to="/dash/users/new">Add New User</Link>
      </p>
    </section>
  );

  return content;
};
export default Welcome;
