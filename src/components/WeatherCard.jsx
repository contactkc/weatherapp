import { Card, Input, Button, Stack, Spinner, Text, Alert } from "@chakra-ui/react"
import { Search } from 'feather-icons-react';
import useWeatherAPI from '../hooks/useWeatherAPI';
import { useState } from 'react'

function WeatherCard() {
    const [city, setCity] = useState('');
    const { weather, error, loading, fetchWeather } = useWeatherAPI();


    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather(city);
    }
    
    return (
        <>
            {(error || weather?.message === 'city not found') && (
                <Alert.Root status="error">
                  <Alert.Indicator />
                  <Alert.Title>City not found. Please enter a valid city.</Alert.Title>
                </Alert.Root>
            )}
            <Card.Root width="486px">
                    <Card.Body id="weather">
                        <Stack direction="row" id="weather__search">
                            <form autocomplete="off" onSubmit={handleSearch} id="weather__form">
                                <label for="city__input"></label>
                                <Input
                                    placeholder="Enter your city..."
                                    type="text"
                                    name="city"
                                    id="city__input"
                                    width="24rem"
                                    value={city}
                                    onChange={handleInputChange}
                                />
                            </form>
                            <Button size="m" variant="outline" width="42px" type="submit" form="weather__form">
                                <Search size={16} />
                            </Button>
                        </Stack>
                        <Stack id="weather__display">
                            {loading && <Spinner size="xs" />}
                            {weather && (
                                <Stack mt={4} spacing={2}>
                                    <Text fontSize="xl" fontWeight="bold">{weather.name}, {weather.sys?.country}</Text>
                                    <Text fontSize="lg" fontWeight="bold">{weather.main?.temp}°F</Text>
                                    <Text>{weather.weather[0]?.description}</Text>
                                </Stack>
                            )}
                        </Stack>
                    </Card.Body>
            </Card.Root>
        </>
    );
}

export default WeatherCard