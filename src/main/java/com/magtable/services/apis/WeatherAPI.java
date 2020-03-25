package com.magtable.services.apis;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Service for fetching the api data from OpenWeatherAPI
 * Created With Reference Too : https://attacomsian.com/blog/http-requests-resttemplate-spring-boot#
 * @author David Ward
 */
@Service
public class WeatherAPI {

    private final RestTemplate restTemplate;

    public WeatherAPI(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public String getWeatherJson(){
        String url = "http://api.openweathermap.org/data/2.5/forecast?id=5913490&APPID=ae895e97d569b50fd4fa9a56923734cd&units=metric";
        return this.restTemplate.getForObject(url, String.class);
    }
}
