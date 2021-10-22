import moment from "moment";
import React from "react";

import { ConvertCelcioustofahrenheit } from "../../helper/caculate-temp";
import styles from "./style.module.css"


const ForeCast = ({ weatherInfo , showInCelcious }) => {
    const { temp, wind_speed, humidity , dt ,weather } = weatherInfo;
    const currentWeather = weather? weather[0] : "" ;

    return (
        <div className={styles.Wrapper}>
            <p className={styles.header}>{moment.unix(dt).format("dddd")}</p>
            <div className={styles.ForeCast}>
                <div className={styles.ForeCast_Img}><img
                        className="Current__weather-icon"
                        src={`${process.env.REACT_APP_ICON_URL}/${currentWeather?.icon}.png`}
                        alt={weather?.code}
                    />
                    <p className={styles.list__temperature}>
                        <span>{showInCelcious ? Math.round(temp?.day ?? 0) : ConvertCelcioustofahrenheit(temp?.day)}
                            <sup className={styles.list__temperature_symbol}>{showInCelcious ?"°C" : "°F"}</sup></span>
                        <span className={styles.light}>{showInCelcious ? Math.round(temp?.night ?? 0) : ConvertCelcioustofahrenheit(temp?.night)}
                            <sup className={styles.list__temperature_symbol}>{showInCelcious ?"°C" : "°F"}</sup></span>
                    </p>
                </div>
                <div className={styles.ForeCast_Info}>
                    <ul className={styles.Current__list}>
                        <li> Humidity: {humidity ?? 0}% </li>
                        <li>
                            Wind: {Math.round((wind_speed || 0) * 3.6)} km/h{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ForeCast;