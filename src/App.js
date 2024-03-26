import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
import InterviewQuestion from "./components/InterviewQuestion";
import FindCount from "./components/JavascriptPractise"

const AppLayout = () => {
  return (
    <div className="app-layout">
      {/* <Header />
      <Body /> */}
      <FindCount />
      <InterviewQuestion />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);