import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.css";
import Search from "./../../components/Search";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import { CurrentWeatherReportByLatLon, GetCoordinatesByCityName, GetWeeklyWeatherreport } from "../../helper/weather-api";
import ForeCast from "../../components/ForeCast";

const Home = (props) => {
    const [currentWeatherData, setCurrentWeatherData] = useState({});
    const [weeklyWeatherData, setWeeklyWeatherData] = useState({});
    const [showInCelcious, setShowInCelcious] = useState(true);
    const [errorMsg, setErrorMsg] = useState(false);
    const [coordinates, setCoordinates] = useState("");

    useEffect(() => {
        if (navigator?.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        }
    }, []);

    useEffect(() => {
        if (coordinates?.lat) {
            fetchWeeklyReport()
        };
    }, [coordinates]);

    //fetching the data based on geolocation
    const setPosition = async position => {
        const response = await CurrentWeatherReportByLatLon(position.coords.latitude, position.coords.longitude);
        setCurrentWeatherData(response);
        console.log(response);
    };

    //if user don't allow the geolocation then this block of code will be executed
    const showError = err => {
        setErrorMsg(err);
    }
    
    const fetchWeeklyReport = async () => {
        const response = await GetWeeklyWeatherreport(coordinates?.lat, coordinates?.lng);
        setWeeklyWeatherData(response.daily);
        setErrorMsg("");

    }

    const searchCity = async (cityName) => {
        const response = await GetCoordinatesByCityName(cityName);
        setCoordinates(response?.data?.results[0]?.geometry);
        const CurrentReport = await CurrentWeatherReportByLatLon(response?.data?.results[0]?.geometry?.lat, response?.data?.results[0]?.geometry?.lng);
        setCurrentWeatherData(CurrentReport);
    }

    const handleUnitChnage = _ => setShowInCelcious(!showInCelcious);
    return (

        <div className={styles.backImg} >
            <Search callBack={searchCity} />
            <p className={styles.tempUnit}>Showing Result in Celcius: <FontAwesomeIcon onClick={handleUnitChnage} icon={showInCelcious ? faToggleOn : faToggleOff} color="#f37928" size="2x" /></p>
            {errorMsg ? <p className={styles.err}>Please allow to access the location</p> : <CurrentWeatherCard weatherInfo={currentWeatherData} showInCelcious={showInCelcious} />}
            <div className={styles.ForeCastReport}>
                {
                    weeklyWeatherData && weeklyWeatherData?.length && (
                        weeklyWeatherData?.map((res, index) => (
                            index !== 7 &&
                            <ForeCast weatherInfo={res} showInCelcious={showInCelcious} />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Home;