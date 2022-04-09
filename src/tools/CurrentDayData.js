import moment from "moment";

export const getCurrentDayForcast = (data, title, fullData) => ({
    weekday: moment(data.applicable_date).format("dddd"),
    country: fullData.parent.title,
    date: moment(data.applicable_date).format("MMMM D"),
    location: title,
    temperature: Math.round(data.the_temp),
    minTemp: Math.round(data.min_temp),
    maxTemp: Math.round(data.max_temp),
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
    humidity: data.humidity,
    visibility: Math.round(data.visibility),
    wind: Math.round(data.wind_speed),
});