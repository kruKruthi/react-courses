import TeamCards from "./TeamCards";
import { useState } from "react";
import teamsData from "../utils/mockData";


const Body = () => {
  const [listOfUsers, setListOfUsers] = useState(teamsData);
  // const [filteredList, setFilteredUser] = useState([]);

  let memberData = listOfUsers.filter((user) => user.role === "member");
  let adminData = listOfUsers.filter((user) => user.role === "admin");
  // setFilteredUser(memberData);

  return (
  <div className="body-layout">
    <h1>Administrators</h1>
    <div className="admin-card">
      {adminData.map((user) => <TeamCards data={user} />)}
    </div>
    <h1>Members</h1>
    <div className="member-card">
      {memberData.map((user) => <TeamCards data={user} />)}
    </div>
  </div>
  );
};

export default Body;