export function getAppointmentsForDay(state, day) {
  const dayAppointments = [];
  const dayApptIds =
    state.days.find((el) => el.name === day)?.appointments || undefined;

  dayApptIds &&
    dayApptIds.forEach((id) => {
      dayAppointments.push(state.appointments[id]);
    });

  return dayAppointments;
}

export function getInterview(state, interview) {
  const interviewOut = interview ? { ...interview } : null;

  if (interviewOut) {
    interviewOut.interviewer = state.interviewers[interviewOut.interviewer];
  }

  return interviewOut;
}