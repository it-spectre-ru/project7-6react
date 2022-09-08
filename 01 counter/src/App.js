import './index.scss';

function App() {
  let count = 0;

  const onClickPlus = () => {
    count++;
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
