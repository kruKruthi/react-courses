const TeamCards = (props) => {
  const { first_name, last_name, img, email} = props?.data;
  return (
    <div className="res-card">
      <img className= "image-content" src={img} />
      <h3 className="name-content">{first_name +" " + last_name } <br /> <h6 className="email-content"> {email}</h6></h3>
    </div>
  )
};

export default TeamCards;
