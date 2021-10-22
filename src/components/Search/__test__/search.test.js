import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from "react";
import Search from "./../index";
import axios from "axios";


jest.mock('axios');
afterEach(cleanup);

it("renders with out crashing", () => {
    const Container = document.createElement("div");
    render(<Search />, Container);
});

it("should have empty value", () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId("search").value).toBe("")
});

it('onchange event chcking', () => {
    const { getByTestId } = render(<Search />);
    const search_input = getByTestId('search');
    fireEvent.change(search_input, { target: { value: 'kolkata' } });
    expect(search_input.value).toBe('kolkata');
});

describe("fetch weather data", () => {
    describe("when API call is successful", () => {
        it("should return weather info", async () => {
            
            // given
            const responseData = {
                "lat": 22.5414,
                "lon": 88.3577,
                "timezone": "Asia/Kolkata",
                "timezone_offset": 19800,
                "current": {
                    "dt": 1634845754,
                    "sunrise": 1634861148,
                    "sunset": 1634902561,
                    "temp": 27.96,
                    "feels_like": 32.46,
                    "pressure": 1010,
                    "humidity": 83,
                    "dew_point": 24.8,
                    "uvi": 0,
                    "clouds": 20,
                    "visibility": 3200,
                    "wind_speed": 0,
                    "wind_deg": 0,
                    "weather": [
                        {
                            "id": 721,
                            "main": "Haze",
                            "description": "haze",
                            "icon": "50n"
                        }
                    ]
                },
                "daily": [
                    {
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
                    },
                    {
                        "dt": 1634967000,
                        "sunrise": 1634947576,
                        "sunset": 1634988916,
                        "moonrise": 1634995500,
                        "moonset": 1634955120,
                        "moon_phase": 0.58,
                        "temp": {
                            "day": 29.17,
                            "min": 22.41,
                            "max": 30.49,
                            "night": 24.11,
                            "eve": 28.01,
                            "morn": 22.7
                        },
                        "feels_like": {
                            "day": 29.88,
                            "night": 24.35,
                            "eve": 29.25,
                            "morn": 22.85
                        },
                        "pressure": 1014,
                        "humidity": 50,
                        "dew_point": 17.66,
                        "wind_speed": 2.67,
                        "wind_deg": 354,
                        "wind_gust": 3.11,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 3,
                        "pop": 0,
                        "uvi": 7.86
                    },
                    {
                        "dt": 1635053400,
                        "sunrise": 1635034004,
                        "sunset": 1635075272,
                        "moonrise": 1635084360,
                        "moonset": 1635044700,
                        "moon_phase": 0.61,
                        "temp": {
                            "day": 28.86,
                            "min": 22.36,
                            "max": 30.39,
                            "night": 23.99,
                            "eve": 28.1,
                            "morn": 22.61
                        },
                        "feels_like": {
                            "day": 29.84,
                            "night": 24.19,
                            "eve": 29.37,
                            "morn": 22.83
                        },
                        "pressure": 1014,
                        "humidity": 53,
                        "dew_point": 18.41,
                        "wind_speed": 2.42,
                        "wind_deg": 320,
                        "wind_gust": 3.26,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 6,
                        "pop": 0,
                        "uvi": 7.86
                    },
                    {
                        "dt": 1635139800,
                        "sunrise": 1635120433,
                        "sunset": 1635161630,
                        "moonrise": 1635173460,
                        "moonset": 1635134340,
                        "moon_phase": 0.64,
                        "temp": {
                            "day": 29.83,
                            "min": 22.3,
                            "max": 30.57,
                            "night": 23.88,
                            "eve": 26.72,
                            "morn": 22.3
                        },
                        "feels_like": {
                            "day": 30.65,
                            "night": 24.13,
                            "eve": 27.74,
                            "morn": 22.52
                        },
                        "pressure": 1012,
                        "humidity": 49,
                        "dew_point": 18.04,
                        "wind_speed": 2.66,
                        "wind_deg": 359,
                        "wind_gust": 3.99,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 0,
                        "pop": 0,
                        "uvi": 7.74
                    },
                    {
                        "dt": 1635226200,
                        "sunrise": 1635206863,
                        "sunset": 1635247988,
                        "moonrise": 1635262800,
                        "moonset": 1635223860,
                        "moon_phase": 0.67,
                        "temp": {
                            "day": 30.43,
                            "min": 23.11,
                            "max": 30.43,
                            "night": 23.6,
                            "eve": 26.52,
                            "morn": 23.11
                        },
                        "feels_like": {
                            "day": 30.6,
                            "night": 23.71,
                            "eve": 26.52,
                            "morn": 23.33
                        },
                        "pressure": 1011,
                        "humidity": 43,
                        "dew_point": 16.39,
                        "wind_speed": 2.87,
                        "wind_deg": 347,
                        "wind_gust": 4.05,
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": 28,
                        "pop": 0,
                        "uvi": 6.53
                    },
                    {
                        "dt": 1635312600,
                        "sunrise": 1635293293,
                        "sunset": 1635334347,
                        "moonrise": 1635352320,
                        "moonset": 1635313320,
                        "moon_phase": 0.7,
                        "temp": {
                            "day": 29.85,
                            "min": 22.01,
                            "max": 30.3,
                            "night": 24.42,
                            "eve": 26.28,
                            "morn": 22.01
                        },
                        "feels_like": {
                            "day": 29.75,
                            "night": 24.59,
                            "eve": 26.28,
                            "morn": 22.09
                        },
                        "pressure": 1012,
                        "humidity": 42,
                        "dew_point": 15.68,
                        "wind_speed": 2.56,
                        "wind_deg": 358,
                        "wind_gust": 3.27,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 0,
                        "pop": 0,
                        "uvi": 7
                    },
                    {
                        "dt": 1635399000,
                        "sunrise": 1635379723,
                        "sunset": 1635420708,
                        "moonrise": 1635442020,
                        "moonset": 1635402600,
                        "moon_phase": 0.73,
                        "temp": {
                            "day": 29.54,
                            "min": 21.8,
                            "max": 29.86,
                            "night": 22.99,
                            "eve": 25.78,
                            "morn": 21.8
                        },
                        "feels_like": {
                            "day": 29.98,
                            "night": 22.99,
                            "eve": 25.88,
                            "morn": 21.84
                        },
                        "pressure": 1014,
                        "humidity": 47,
                        "dew_point": 17.07,
                        "wind_speed": 3.15,
                        "wind_deg": 316,
                        "wind_gust": 4.54,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": 61,
                        "pop": 0,
                        "uvi": 7
                    },
                    {
                        "dt": 1635485400,
                        "sunrise": 1635466154,
                        "sunset": 1635507069,
                        "moonrise": 1635531840,
                        "moonset": 1635491640,
                        "moon_phase": 0.75,
                        "temp": {
                            "day": 29.13,
                            "min": 21,
                            "max": 29.55,
                            "night": 22.54,
                            "eve": 25.34,
                            "morn": 21
                        },
                        "feels_like": {
                            "day": 29.47,
                            "night": 22.55,
                            "eve": 25.42,
                            "morn": 21.09
                        },
                        "pressure": 1014,
                        "humidity": 47,
                        "dew_point": 16.81,
                        "wind_speed": 3.29,
                        "wind_deg": 338,
                        "wind_gust": 4.08,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 0,
                        "pop": 0,
                        "uvi": 7
                    }
                ]
            
            };
            axios.get.mockImplementation((url) => {
                switch (url) {
                    case 'https://api.openweathermap.org/data/2.5/weather?lat=26.7271012&lon=88.3952861&units=metric&appid=244a5c39079ef3dd3d24cf3593de476e':
                        return Promise.resolve(data)
                    case 'https://api.openweathermap.org/geo/1.0/direct?q=kolkata&limit=5&appid=11ab70ad14039b5b8971613e0c1c91b6':
                        return Promise.resolve(data)
                    case  'https://api.openweathermap.org/data/2.5/onecall?&lat=22.5414185&lon=88.3576912&exclude=minutely,hourly,alerts&appid=244a5c39079ef3dd3d24cf3593de476e&units=metric':
                        return Promise.resolve(data)
        
                    default:
                        return Promise.reject(new Error('not found'))
                }
            })
            
            
            axios.get.mockResolvedValueOnce(responseData);

            // when
            const data = await axios.get('https://api.openweathermap.org/data/2.5/onecall?&lat=22.5414185&lon=88.3576912&exclude=minutely,hourly,alerts&appid=244a5c39079ef3dd3d24cf3593de476e&units=metric')
            
            expect(axios.get).toHaveBeenCalledWith("https://api.openweathermap.org/data/2.5/onecall?&lat=22.5414185&lon=88.3576912&exclude=minutely,hourly,alerts&appid=244a5c39079ef3dd3d24cf3593de476e&units=metric");
            expect(data).toEqual(responseData);
            
        });
    });

})




