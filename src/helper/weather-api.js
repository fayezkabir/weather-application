import axiosInstance from "../services/axios-config";

export const CurrentWeatherReportByLatLon = async (lat, lon) => {
    try {
        const { data } = await axiosInstance.get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
            console.log(data , "-------------------------------");
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const GetCoordinatesByCityName = async (cityName) => {
    try {
        const data = await axiosInstance
            .get(`${process.env.REACT_APP_OPEN_CAGE_API_URL}?q=${cityName}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`);
        return data;
    }
    catch (err) {
        console.error(err);
    }

}

export const GetWeeklyWeatherreport = async (lat, lon) => {
    try {
        const { data } = await axiosInstance
            .get("/onecall?", {
                params: {
                    lat: lat,
                    lon: lon,
                    exclude: "minutely,hourly,alerts",
                    appid: process.env.REACT_APP_API_KEY,
                    units: "metric"
                }
            })
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

// export const CurrentWeatherReportByCityName = async (cityName) => {
//     try {
//         const {data}  = await axiosInstance
//         .get(`/current?city=${cityName}&start_date=${moment().format('YYYY-MM-DD').toString()}&end_date=${moment().add(7, 'days').format('YYYY-MM-DD').toString()}&units=c&key=${process.env.REACT_APP_API_KEY}`);
//         return data;
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// export const WeeklyWeatherReportByCityName = async (cityName) => {
//     try {
//         const {data}  = await axiosInstance.get(`/history/daily?city=${cityName}&start_date=${moment().format('YYYY-MM-DD').toString()}&end_date=${moment().add(7, 'days').format('YYYY-MM-DD').toString()}&units=c&key=${process.env.REACT_APP_API_KEY}`);
//         return data;
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

//.get("https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=c40e30ade0c8482aa41e1600d876512e&include=minutely")