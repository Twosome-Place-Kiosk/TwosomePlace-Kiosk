package com.twosomekiosk.twosome202211114.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class CollectionsController {

    @GetMapping("/main/{category}")
    public String loadCollections(@PathVariable String category){
        return "/main";
    }
}
