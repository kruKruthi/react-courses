import { CDN_URL } from "../utils/constant";

const TeamCards = (props) => {
  const { first_name, last_name, img, email} = props?.data;
  return (
    <div className="res-card">
      <img className= "res-logo" src={img} />
      <h3>{first_name +" " + last_name }</h3>
      <h5>{email}</h5>
    </div>
  )
};

export default TeamCards;
