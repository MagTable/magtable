package com.magtable.controller;

import com.magtable.services.apis.WeatherAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for Weather data
 * @author David Ward
 */
@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherAPI weatherAPI;

    @GetMapping("")
    public String getWeather() {
        return weatherAPI.getWeatherJson();
    }
}
