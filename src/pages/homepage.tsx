import Header from '../components/header';

const Homepage = () => {
  const handleButton = () => {
    window.location.href = '/about';
  };

  const handleCount = () => {
    window.location.href = '/count';
  };
  const handleTodo = () => {
    window.location.href = '/todoPage';
  };
  const handleCalculator =() => {
    window.location.href = '/Calculator'
  }
  const handleTask =() =>{
    window.location.href = '/Task'
  }

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body, #root {
            height: 100%;
            width: 100%;
          }

          .home {
            height: 100%;
            width: 100%;
            background-color: #00b7e7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            font-size: 40px;
            color: #1e293b;
            margin-bottom: 25px;
            font-weight: bold;
          }

          .button-section {
            display: flex;
            gap: 15px;
          }

          button {
            background-color: #1e293b;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background-color: #324155;
          }
        `}
      </style>
<Header/>
      <div className="home">
        <h1 className="title">HomePage</h1>

        <div className="button-section">
          <button onClick={handleButton}>Click Me</button>
          <button onClick={handleCount}>Count</button>
          <button onClick={handleTodo}>Todo</button>
           <button onClick={handleTask}>Task</button>
          <button onClick={handleCalculator}>Calculator</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
