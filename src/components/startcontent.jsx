import React from "react";

const Start = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-between px-4">
      <p className="text-lg font-bold">Dein Workout heute</p>
      <p className="text-sm ml-auto">Trainingsplan</p>
    </div>
  );
};

export default Start;
