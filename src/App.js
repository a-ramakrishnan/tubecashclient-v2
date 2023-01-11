import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/dash/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import ChannelStats from "./features/channelstats/channelStats";
import AddChannel from "./features/addchannel/AddChannel";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import Prefetch from "./features/auth/Prefetch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="addchannel">
              <Route index element={<AddChannel />} />
            </Route>
            <Route path="channelstats">
              <Route index element={<ChannelStats />} />
            </Route>
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
