package com.twosomekiosk.twosome202211114.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {
    @GetMapping("/admin/login")
    public String login() {
        return "/account/login";
    }

}
