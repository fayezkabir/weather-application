import { faCloudMoonRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";

import { ConvertCelcioustofahrenheit } from "../../helper/caculate-temp";
import styles from "./style.module.css"


const CurrentWeatherCard = ({ weatherInfo, showInCelcious }) => {
    const { main , sys , weather ,wind ,name ,dt } = weatherInfo? weatherInfo : "";
    const currentWeather = weather? weather[0] : "" ;

    return (
        <div className={styles.Wrapper}>
            <p>current wether <span className={styles.Refresh} ><FontAwesomeIcon icon={faCloudMoonRain} /></span></p>
            <div className={styles.Current}>
                <div className={styles.Current__info}>
                    <img
                        className="Current__weather-icon"
                        src={`${process.env.REACT_APP_ICON_URL}/${currentWeather?.icon}.png`}
                        alt={weather?.code}
                    />
                    <ul className={styles.Current__list}>
                        <li className={styles.list__temperature}>
                            {showInCelcious? Math.round(main?.temp || 0) : ConvertCelcioustofahrenheit(main?.temp)}
                            <sup className={styles.list__temperature_symbol}>{showInCelcious ?"°C" : "°F"}</sup>
                        </li>
                        <li> Humidity: {main?.humidity ?? 0}% </li>
                        <li>
                            Wind: {Math.round((wind?.speed || 0) * 3.6)} km/h{" "}
                        </li>
                    </ul>
                </div>
                <div className={styles.Current__other_info}>
                    <h2 className={styles.other_info__city}>
                        {name || "-"} ,
                        {sys?.country || "-"}
                    </h2>
                    <h3 className={styles.other_info__clouds}>{moment.unix(dt).format("dddd")}</h3>
                    <h3 className={styles.other_info__clouds}>
                        {currentWeather?.description}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherCard;
