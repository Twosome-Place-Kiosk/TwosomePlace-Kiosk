package com.twosomekiosk.twosome202211114.api;

import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.dto.RegisterReqDto;
import com.twosomekiosk.twosome202211114.dto.validation.ValidationSequence;
import com.twosomekiosk.twosome202211114.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequestMapping("/api/account")
@RestController
@RequiredArgsConstructor
public class AccountApi {

    private final AccountService accountService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
                    @Validated(ValidationSequence.class)
                    @RequestBody RegisterReqDto registerReqDto,
                    BindingResult bindingResult) throws Exception {

        accountService.duplicateEmail(registerReqDto);
        accountService.register(registerReqDto);

        return ResponseEntity.created(URI.create("/account/login")).body(new CMRespDto<>("회원가입 성공", registerReqDto.getEmail())); //아이디 바로 입력 가능하게 해줌
    }
}
