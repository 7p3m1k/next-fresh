"use client";
import { useState } from "react";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>

      {count.map((item, i) => {
        return (
          <>
            <span>{item}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
          </>
        );
      })}

      {items.map((item, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <span>{count[index]}</span>
            <button
              onClick={() => {
                setCount(count++);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setCount(count--);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
