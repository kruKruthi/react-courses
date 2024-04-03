import { PAGE_TITLE } from "../utils/constant";

const Header = () => {
  return (
    <div className="app-header">
      <div className="title-container">
        <h1>{PAGE_TITLE}</h1>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default Header;
