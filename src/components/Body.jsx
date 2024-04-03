import TeamCards from "./TeamCards";
import teamsData from "../utils/mockData";
import { MEMBER_TITLE, ADMIN_TITLE } from "../utils/constant";

const Body = () => {
  let memberData = teamsData.filter((user) => user.role === "member");
  let adminData = teamsData.filter((user) => user.role === "admin");

  return (
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