import React, { useState, useRef, useMemo } from "react";
import Counter from "./Counter";

const TotalCounter = () => {
  const [counterData, setCounterData] = useState({
    "Counter A": 0,
    "Counter B": 5,
    "Counter C": -2,
  });

  const counterRefs = {
    a: useRef(),
    b: useRef(),
    c: useRef(),
  };

  const handleCountChange = (name, value) => {
    setCounterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetAll = () => {
    counterRefs.a.current?.reset();
    counterRefs.b.current?.reset();
    counterRefs.c.current?.reset();
  };
  const totalCount = useMemo(() => {
    return Object.values(counterData).reduce((sum, val) => sum + val, 0);
  }, [counterData]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        React Props & State Exercise
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Total Count: {totalCount}
        </h2>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Counter
          ref={counterRefs.a}
          name="Counter A"
          initialValue={0}
          color="blue"
          onCountChange={handleCountChange}
        />
        <Counter
          ref={counterRefs.b}
          name="Counter B"
          initialValue={5}
          color="green"
          onCountChange={handleCountChange}
        />
        <Counter
          ref={counterRefs.c}
          name="Counter C"
          initialValue={-2}
          color="purple"
          onCountChange={handleCountChange}
        />
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Learning Points:</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>Each counter has local state</li>
          <li>Parent collects values to calculate total</li>
          <li>
            Parent uses <code>ref</code> to reset children
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TotalCounter;
