import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'; // Import your CSS file for custom styles
import { useState } from 'react';

const App = () => {
  // Example array of date strings returned from the server
  const initialDateStrings = ['2024-12-17', '2024-12-22', '2024-12-25'];

  // Convert the date strings to Date objects
  const initialHighlightDays = initialDateStrings.map(
    (dateString) => new Date(`${dateString}T00:00:00`)
  );

  // State to hold the currently highlighted days
  const [highlightDays, setHighlightDays] = useState(initialHighlightDays);

  const toggleHighlight = (date) => {
    const dateTime = date.getTime();
    if (highlightDays.some((day) => day.getTime() === dateTime)) {
      // If the date is already highlighted, remove it
      setHighlightDays((prev) =>
        prev.filter((day) => day.getTime() !== dateTime)
      );
    } else {
      // If the date is not highlighted, add it
      setHighlightDays((prev) => [...prev, date]);
    }
  };

  const tileClassName = ({ date }) => {
    return highlightDays.some((day) => day.getTime() === date.getTime())
      ? 'highlight'
      : null;
  };

  return (
    <div>
      <Calendar tileClassName={tileClassName} 
              onClickDay={toggleHighlight} // Add click handler
      />
    </div>
  );
};

export default App;
