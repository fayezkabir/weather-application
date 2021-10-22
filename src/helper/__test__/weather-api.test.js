import { cleanup } from '@testing-library/react';
import axios from "axios";


jest.mock('axios');
afterEach(cleanup);



describe("fetch weather data", () => {
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

            // axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
            axios.get.mockResolvedValueOnce(responseData);

            // when
            const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=26.7271012&lon=88.3952861&units=metric&appid=244a5c39079ef3dd3d24cf3593de476e')
            // const data = await CurrentWeatherReportByLatLon(26.7271012 , 88.3952861);

            // console.log(process.env , "+++++++++++")
            // then
            expect(axios.get).toHaveBeenCalledWith("https://api.openweathermap.org/data/2.5/weather?lat=26.7271012&lon=88.3952861&units=metric&appid=244a5c39079ef3dd3d24cf3593de476e");
            expect(data).toEqual(responseData);

            // await expect(data).toEqual(responseData);
        });
    });

})


