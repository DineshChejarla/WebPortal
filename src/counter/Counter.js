import React, { useState, useImperativeHandle, forwardRef } from "react";
import styles from "./Counter.module.scss";

const Counter = forwardRef(
  ({ name, initialValue = 0, color, onCountChange = () => {} }, ref) => {
    const [count, setCount] = useState(initialValue);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setCount(initialValue);
        if (typeof onCountChange === "function") {
          onCountChange(name, initialValue);
        }
      },
    }));

    const increment = () => {
      const newCount = count + 1;
      setCount(newCount);
      if (typeof onCountChange === "function") {
        onCountChange(name, newCount);
      }
    };

    const decrement = () => {
      const newCount = count - 1;
      setCount(newCount);
      if (typeof onCountChange === "function") {
        onCountChange(name, newCount);
      }
    };

    const reset = () => {
      setCount(initialValue);
      if (typeof onCountChange === "function") {
        onCountChange(name, initialValue);
      }
    };

    return (
      <div className={`${styles.counterCard} ${styles[`border-${color}`]}`}>
        <h3 className={styles.counterTitle}>{name}</h3>
        <div className={styles.counterValue}>{count}</div>
        <div className={styles.buttonGroup}>
          <button onClick={decrement} className={styles[color]}>
            -
          </button>
          <button onClick={increment} className={styles[color]}>
            +
          </button>
          <button onClick={reset} className={styles.gray}>
            Reset
          </button>
        </div>
      </div>
    );
  }
);

export default Counter;
