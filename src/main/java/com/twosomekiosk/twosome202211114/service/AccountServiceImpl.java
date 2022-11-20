package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.User;
import com.twosomekiosk.twosome202211114.dto.RegisterReqDto;
import com.twosomekiosk.twosome202211114.exception.CustomInternalServerErrorException;
import com.twosomekiosk.twosome202211114.exception.CustomValidationException;
import com.twosomekiosk.twosome202211114.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.flogger.Flogger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
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

//        log.info("{}",user);
        int result = accountRepository.saveUser(user);

        if(result == 0){ //db 안들어갓으면 예외 발생해라.
            throw new CustomInternalServerErrorException("회원가입 중 문제가 발생하였습니다.");
        }
    }
}
