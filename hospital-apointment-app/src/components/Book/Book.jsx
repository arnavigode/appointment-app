import React from 'react'

import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'

export default function Book() {
    return (
        <SchedulerCalendar
                availabilities={[
                  {
                    day: "mon",
                    slots: [
                      {from: '09:00', to: '9:20'},
                      {from: '10:00', to: '10:20'},
                      {from: '11:00', to: '11:20'},
                    ],
                    comment: "Test comment"
                  },
                  {
                    day: "2021-01-26",
                    slots: [
                      {from: '09:00', to: '10:30'},
                      {from: '11:30', to: '19:00'},
                    ]
                  },
                ]}
                availabilityType={'infinity'}
                duration={10}
                onIntervalChange={() => {}}
              />
      )
}
