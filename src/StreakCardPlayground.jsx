import React from 'react';
import StreakCard from './design-system/components/StreakCard.jsx';

const StreakCardPlayground = () => {
  const weekdaysExample1 = [
    { letter: 'M', active: true },
    { letter: 'T', active: true },
    { letter: 'W', active: false },
    { letter: 'T', active: true },
    { letter: 'F', active: true },
    { letter: 'S', active: false },
    { letter: 'S', active: false }
  ];

  const weekdaysExample2 = [
    { letter: 'M', active: true },
    { letter: 'T', active: true },
    { letter: 'W', active: true },
    { letter: 'T', active: true },
    { letter: 'F', active: true },
    { letter: 'S', active: true },
    { letter: 'S', active: true }
  ];

  const weekdaysExample3 = [
    { letter: 'M', active: false },
    { letter: 'T', active: false },
    { letter: 'W', active: false },
    { letter: 'T', active: false },
    { letter: 'F', active: false },
    { letter: 'S', active: false },
    { letter: 'S', active: false }
  ];

  return (
    <div style={{ 
      padding: '32px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      maxWidth: '600px',
      margin: '0 auto' 
    }}>
      <h1>StreakCard Playground</h1>
      
      <div>
        <h2>Example 1: Moderate Progress</h2>
        <StreakCard 
          streakDays={15}
          currentMonthDays={31}
          activeDays={15}
          monthName="January"
          weekdays={weekdaysExample1}
        />
      </div>

      <div>
        <h2>Example 2: Perfect Week</h2>
        <StreakCard 
          streakDays={28}
          currentMonthDays={28}
          activeDays={28}
          monthName="February"
          weekdays={weekdaysExample2}
        />
      </div>

      <div>
        <h2>Example 3: Just Starting</h2>
        <StreakCard 
          streakDays={3}
          currentMonthDays={30}
          activeDays={3}
          monthName="March"
          weekdays={weekdaysExample3}
        />
      </div>

      <div>
        <h2>Example 4: Mid-Month Progress</h2>
        <StreakCard 
          streakDays={22}
          currentMonthDays={31}
          activeDays={22}
          monthName="October"
          weekdays={[
            { letter: 'M', active: true },
            { letter: 'T', active: true },
            { letter: 'W', active: true },
            { letter: 'T', active: false },
            { letter: 'F', active: true },
            { letter: 'S', active: true },
            { letter: 'S', active: false }
          ]}
        />
      </div>
    </div>
  );
};

export default StreakCardPlayground;