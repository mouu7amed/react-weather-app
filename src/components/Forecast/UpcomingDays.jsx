import React from 'react'
import { UpcomingDaysItem } from './UpcomingDaysItem'

export const UpcomingDays = ({ days }) => {
    return (
        <div className="box">
            {days.map(day => <UpcomingDaysItem {...day} key={day.weekday} />)}
        </div>
    )
}
