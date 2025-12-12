import React from "react";

const Count = () => {
  const [count, setCount] = React.useState<number>(0);

  function handleincrement() {
    setCount(count + 1);
  }
  function handledecrement() {
    setCount(count - 1);
  }
  function handlereset() {
    setCount(0);
  }

  return (
    <>
      <style>
        {`
          .count-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #864e85ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .count-title {
            font-size: 48px;
            font-weight: bold;
            color: #155bdcff;
            margin: 10px 0;
          }

          .count-sub {
            font-size: 18px;
            color: #444444ff;
            margin-bottom: 20px;
          }

          .count-number {
            font-size: 40px;
            font-weight: bold;
            margin: 15px 0 30px 0;
            color: #191717ff;
          }

          .count-btn {
            padding: 10px 20px;
            margin: 5px;
            font-size: 16px;
            border: none;
            background: white;
            border-radius: 8px;
            box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: 0.2s ease;
          }

          .count-btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="count-container">
        <h1 className="count-title">Count Page</h1>
        <p className="count-sub">Welcome to Count Page</p>

        <h2 className="count-number">{count}</h2>

        <div>
          <button className="count-btn" onClick={handleincrement}>Count++</button>
          <button className="count-btn" onClick={handledecrement}>Count--</button>
          <button className="count-btn" onClick={handlereset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Count;
