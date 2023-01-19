import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

// form component that renders a form for creating and editing appointments

export default function Form(props) {
  const {
    interviewers,
    interviewer: inhInterviewer,
    student: inhStudent,
    onSave,
    onCancel,
  } = { ...props };

  const [student, setStudent] = useState(inhStudent || "");
  const [interviewer, setInterviewer] = useState(inhInterviewer?.id || null);
  const [error, setError] = useState("");

  // validate function that checks if the student name is blank or if an interviewer is selected

  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }

    setError("");
    onSave(student, interviewer);
  };

  // reset function that resets the form

  const reset = () => {
    setError("");
    setStudent("");
    setInterviewer(null);
  };

  // cancel function that resets the form and calls the onCancel function

  const cancel = () => {
    reset();
    onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
