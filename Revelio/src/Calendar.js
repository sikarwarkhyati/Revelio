import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Cultural Fest", date: "2025-11-12" },
        { title: "Sports Meet", date: "2025-11-22" },
        { title: "Tech Symposium", date: "2025-11-30" },
      ]}
      eventClick={(info) => alert(`Event: ${info.event.title}`)}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Calendar;
