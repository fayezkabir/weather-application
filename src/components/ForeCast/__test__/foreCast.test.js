import { cleanup, render } from '@testing-library/react';
import ForeCast from "./../index";

afterEach(cleanup);

it("renders with out crashing", () => {
    const Container = document.createElement("div");
    render(<ForeCast />, Container);
});

describe("when API call is successful", () => {
    it("should return weather info", async () => {
        // given
        const responseData = {
            "dt": 1634880600,
            "sunrise": 1634861148,
            "sunset": 1634902561,
            "moonrise": 1634906820,
            "moonset": 1634865540,
            "moon_phase": 0.55,
            "temp": {
                "day": 30.31,
                "min": 24.39,
                "max": 31.53,
                "night": 24.88,
                "eve": 28.39,
                "morn": 26.19
            },
            "feels_like": {
                "day": 32.42,
                "night": 25.09,
                "eve": 29.79,
                "morn": 26.19
            },
            "pressure": 1012,
            "humidity": 55,
            "dew_point": 20.23,
            "wind_speed": 3.07,
            "wind_deg": 290,
            "wind_gust": 3.82,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 9,
            "pop": 0.29,
            "rain": 0.35,
            "uvi": 7.94
        };

        const Container = document.createElement("div");
        const { getByText } = render(<ForeCast weatherInfo={responseData} />, Container);
        expect(getByText('Humidity: 55%')).toBeTruthy();
        expect(getByText(`Wind: 11 km/h`)).toBeTruthy();
        expect(getByText('Friday')).toBeTruthy();
        
    });
});