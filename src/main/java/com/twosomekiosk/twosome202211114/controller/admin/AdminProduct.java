package com.twosomekiosk.twosome202211114.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminProduct {

    @GetMapping("/product")
    public String login() {return "admin/product_registration";}

    @PostMapping("/product")
    public String adminlogin() {return "admin/product_registration";}


}
