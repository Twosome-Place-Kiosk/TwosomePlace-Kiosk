package com.twosomekiosk.twosome202211114.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminProduct {
    @GetMapping("/admin/product")
    public String login() {
        return "/admin/admin";
    }
}
