import TeamCards from "./TeamCards";
import ShimmerCard from "./ShimmerCard";
import { MEMBER_TITLE, ADMIN_TITLE, USER_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Body = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {fetchData()}, {});

  const fetchData = async () => {
    const data = await fetch(USER_URL);
    const json = await data.json();
    setUserData(json);
  }

  let memberData = userData.filter((user) => user.role === "member");
  let adminData = userData.filter((user) => user.role === "admin");

  return userData.length === 0 ? <ShimmerCard /> : (
  <div>
    <div className="admin">
      <h1 className="section-layout">{ADMIN_TITLE}</h1>
      <div className="admin-card">
        {adminData.map((user) => <TeamCards data={user} />)}
      </div>
    </div>
    <hr className="hr-line"/>
    <div className="member">
      <h1 className="section-layout">{MEMBER_TITLE}</h1>
      <div className="member-card">
        {memberData.map((user) => <TeamCards data={user} />)}
      </div>
    </div>
  </div>
  );
};

export default Body;
