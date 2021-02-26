import React from 'react';

export default function FoodDiary({ foodDiary }) {
  const keys = Object.keys(foodDiary);
  let caloriesTotal = 0;
  const foodDiaryElements = keys.map((key, index) => {
    caloriesTotal = caloriesTotal + foodDiary[key];

    return (
      <li key={index}>
        {key}: {foodDiary[key]}
      </li>
    );
  });
  return (
    <div>
      <h1 className="title is-3">FoodDiary</h1>
      <ul>{foodDiaryElements}</ul>
      <h3 className="title is-5 mt-4">Total: {caloriesTotal} cal</h3>
    </div>
  );
}
