import "./Counter.css";

function Counter() {
  return (
    <>
      <div className="counter-div">
        <button className="btn">-</button>
        <p className="display">10</p>
        <button className="btn">+</button>
      </div>
    </>
  );
}

export default Counter;
