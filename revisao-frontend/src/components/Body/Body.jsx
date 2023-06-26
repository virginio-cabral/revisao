import "./Body.css";

import Article from "../Article/Article";
import Counter from "../Counter/Counter";

function Body() {
  return (
    <>
      <div className="body-content">
        <div className="body-content-wrap">
          <Article></Article>
          <Counter></Counter>
        </div>
      </div>
    </>
  );
}

export default Body;
