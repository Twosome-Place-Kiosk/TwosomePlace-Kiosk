package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.User;
import com.twosomekiosk.twosome202211114.dto.RegisterReqDto;
import com.twosomekiosk.twosome202211114.exception.CustomValidationException;
import com.twosomekiosk.twosome202211114.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public void duplicateEmail(RegisterReqDto registerReqDto) throws Exception {
        //이메일 중복 확인
        User user = accountRepository.findUserByEmail(registerReqDto.getEmail());

        if( user != null){
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("email", "이미 사용중인 이메일 주소입니다.");

            throw new CustomValidationException("Duplicate eamil", errorMap); //핸들러가 잡음
        }
    }

    @Override
    public void register(RegisterReqDto registerReqDto) throws Exception {
        //회원가입 진행(예외 발생 x시)
        User user = registerReqDto.toEntity();
    }
}
