import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex justify-between p-2 border border-deactive rounded-md">
      <button className="bg-gray-4 text-white px-1 rounded-md" onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button disabled={count === 1} className="bg-gray-4 text-white px-2 rounded-md"
              onClick={handleDecrement}>-
      </button>
    </div>
  );
}

export default Counter;