package com.twosomekiosk.twosome202211114.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor

public class MainController {

    @GetMapping("/banner")
    public String loadBanner() {
        return "banner";
    }

    @GetMapping("/main")
    public String loadMain() {
        return "main";
    }

    @GetMapping("/orderCheck")
    public String loadOption() {
        return "orderCheck";
    }



}
