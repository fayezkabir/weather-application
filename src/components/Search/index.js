import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axios-config";
import styles from "./style.module.css";

const Home = ({ callBack }) => {
    const [currentCity, setCurrentCity] = useState("");
    const [labelState, setLabelState] = useState("Search__label");
    const [placeholder, setPlaceholder] = useState("Enter the location");


    const handleInputChange = (event) => {
        if (labelState === "Search__label Search__warning") {
            setLabelState("Search__label");
            setPlaceholder("Enter the location");
        }
        setCurrentCity(event.target.value);
    }

    const handleInputClick = () =>  {
        if (labelState === "Search__label Search__warning") {
            setLabelState("Search__label");
            setPlaceholder("Enter the location");
        }
    }

    const handleButtonClick = () => {
        if (currentCity.trim(" ") === "") {
            setLabelState("Search__label Search__warning");
            setPlaceholder("");
        } else {
            callBack(currentCity);
            setLabelState("Search__label");
            setPlaceholder("Enter the location");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleButtonClick();
        else handleInputClick();
    }

    return (

        <div className={styles.Search}>
            <label className={`${styles.Search__label}`}>
                <input
                    value={currentCity}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    onKeyPress={handleKeyPress}
                    className={styles.Search__input}
                    placeholder={placeholder}
                    data-testid="search"
                />
                {labelState === "Search__label Search__warning" && (
                    <p className={styles.Search__warning_content}> Field is empty </p>
                )}
            </label>
            <button onClick={handleButtonClick} data-testid="button" className={styles.Search__button}>
                Search
            </button>
        </div>
    )
}

export default Home;