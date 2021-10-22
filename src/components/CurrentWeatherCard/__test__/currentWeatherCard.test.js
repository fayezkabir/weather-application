import { cleanup, render } from '@testing-library/react';
import axios from "axios";
import CurrentWastherCard from "./../index";


it("renders with out crashing", () => {
    const Container = document.createElement("div");
    render(<CurrentWastherCard />, Container);
});

describe("when API call is successful", () => {
    it("should return weather info", async () => {
        // given
        const responseData = {
            "coord": {
                "lon": 88.3953,
                "lat": 26.7271
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 21.97,
                "feels_like": 22.62,
                "temp_min": 21.97,
                "temp_max": 21.97,
                "pressure": 1010,
                "humidity": 92,
                "sea_level": 1010,
                "grnd_level": 995
            },
            "visibility": 10000,
            "wind": {
                "speed": 0.73,
                "deg": 277,
                "gust": 1.26
            },
            "clouds": {
                "all": 24
            },
            "dt": 1634838673,
            "sys": {
                "country": "IN",
                "sunrise": 1634774934,
                "sunset": 1634815975
            },
            "timezone": 19800,
            "id": 1256525,
            "name": "Siliguri",
            "cod": 200
        };

        const Container = document.createElement("div");
        const { getByText } = render(<CurrentWastherCard weatherInfo={responseData} />, Container);
        expect(getByText('few clouds')).toBeTruthy();
        expect(getByText('Siliguri ,IN')).toBeTruthy();
        expect(getByText('Humidity: 92%')).toBeTruthy();
        expect(getByText(`Wind: ${Math.round(0.73 * 3.6)} km/h`)).toBeTruthy();
        expect(getByText('Thursday')).toBeTruthy();
        // expect(getByText('few clouds')).toBeTruthy();
        
    });
});