import moment from "moment";

export const getUpcomingDaysForecast = (data) =>
    data.slice(1).map((day) => ({
        imgUrl: day.weather_state_abbr,
        maxTemp: Math.round(day.max_temp),
        minTemp: Math.round(day.min_temp),
        weekday: moment(day.applicable_date).format("dddd").substring(0, 3),
    }));