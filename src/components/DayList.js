import React from "react";
import DayListItem from "./DayListItem";

// day list component that renders the list of days

export default function DayList(props) {
  const dayListItems = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        setDay={props.onChange}
        selected={day.name === props.value}
      />
    );
  });

  return <ul>{dayListItems}</ul>;
}
