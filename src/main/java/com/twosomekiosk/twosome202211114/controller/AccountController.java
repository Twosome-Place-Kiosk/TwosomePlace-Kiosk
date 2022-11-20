package com.twosomekiosk.twosome202211114.controller;

import com.twosomekiosk.twosome202211114.dto.RegisterReqDto;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AccountController {
    @GetMapping("/account/login")
    public String login(Model model,
                        @RequestParam @Nullable String user_name,
                        @RequestParam @Nullable String error) {
        model.addAttribute("user_name", user_name == null ? "" : user_name);
        model.addAttribute("error", error == null ? "" : error);
        return "account/login";
    }

    @GetMapping("/account/register")
    public String register(RegisterReqDto registerReqDto) {

        return "account/register";
    }
}
