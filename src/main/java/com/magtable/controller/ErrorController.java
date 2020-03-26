package com.magtable.controller;

import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorController {

    @Autowired
    public ErrorService errorService;

    @GetMapping("/error")
    public String error() {
        return "forward:/";
    }
}
