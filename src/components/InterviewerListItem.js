import React from "react";
import classNames from "classnames";
import "./InterviewerListItem.scss";

// component which renders an interviewer item

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = { ...props };

  const classes = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li className={classes} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
