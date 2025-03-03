interface ISchedulingTime {
  day: string;
  hours: string;
}

export const SchedulingTime = ({ day, hours }: ISchedulingTime) => {
  return (
    <p style={{ fontSize: "14px", fontFamily: "Poppins" }}>
      <strong style={{ fontSize: "14px", fontFamily: "monospace" }}>{day}</strong> {hours}
    </p>
  );
};
