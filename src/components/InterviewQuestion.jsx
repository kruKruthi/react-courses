import { useState } from "react";

// Build an application to show list of value for users and Post via radio button.
const InterviewQuestion = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [radioStatus, setRadioStatus] = useState("");

  const fetchUserData = async () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((userResponse) => userResponse.json()).then((result) => setUserData(result));
    setRadioStatus("User");
  };
  const fetchPostData = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((userResponse) => userResponse.json()).then((result) => setPostData(result));
    setRadioStatus("Post");
  };

  return(
    <div  >
      <input type="radio" onChange={fetchPostData} checked={radioStatus === 'Post' ? "Post" : ""}/> Post
      <input type="radio" onChange={fetchUserData} checked={radioStatus === 'User'? "User" : ""}/> User
    <ul>
      {
        radioStatus === "Post" ? postData.map((item) => <li>{item.title}</li>) : userData.map((item) => <li>{item.name}</li>)
      }
    </ul>
    </div>
  );
};

export default InterviewQuestion;