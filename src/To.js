import React from "react";

export default function To(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}