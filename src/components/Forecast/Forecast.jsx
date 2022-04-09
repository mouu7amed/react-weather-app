import React, { Fragment } from 'react'
import { CurrentDay } from './CurrentDay'
import { UpcomingDays } from './UpcomingDays'

export const Forecast = ({ forecast }) => {
    return (
        <Fragment>
            <div className="forcast-container">
                <div className="current">
                    <CurrentDay {...forecast.currentDayForecast} />
                </div>
                <div className="upcoming">
                    <UpcomingDays days={forecast.upcomingDaysForecast} />
                </div>
            </div>
        </Fragment>
    )
}
