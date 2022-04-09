import { useState } from "react";
import axios from "axios";
import { getCurrentDayForcast } from './CurrentDayData'
import { getUpcomingDaysForecast } from './UpcomingDaysData'

const useForecast = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [forecast, setForecast] = useState(null);

    const BASE_URL =
        "https://shrouded-plateau-37107.herokuapp.com/https://www.metaweather.com/api/location";

    const getWoeid = async (location) => {
        let { data } = await axios(`${BASE_URL}/search/?query=${location}`);
        if (!data || data.length === 0) {
            setError("There's no such location!");
            setLoading(false);
            return;
        }
        return data[0];
    };

    const getForcastData = async (woeid) => {
        let { data } = await axios(`${BASE_URL}/${woeid}`);
        if (!data || data.length === 0) {
            setError("Somthing wend wrong!");
            setLoading(false);
            return;
        }
        return data;
    };

    const gatherForcastData = (data) => {
        const currentDayForecast = getCurrentDayForcast(
            data.consolidated_weather[0],
            data.title,
            data
        );
        const upcomingDaysForecast = getUpcomingDaysForecast(
            data.consolidated_weather
        );

        setLoading(false);
        setForecast({
            currentDayForecast,
            upcomingDaysForecast,
        });
    };

    const submitRequest = async (location) => {
        setError(null);
        setLoading(true);

        const response = await getWoeid(location);
        if (!response) return;

        const data = await getForcastData(response.woeid);
        if (!data) return;

        gatherForcastData(data);
    };

    return {
        isLoading,
        error,
        forecast,
        submitRequest,
    };
};

export default useForecast;