package com.magtable.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;
import java.net.URISyntaxException;

/**
 * Class for overridding the whitelabel error page
 */
@Controller
public class OverrideController implements ErrorController {
    @Override
    public String getErrorPath() {
        return "/";
    }

    @RequestMapping("/error")
    public String index() throws URISyntaxException {
        return "/";
    }
}
