package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.dto.RegisterReqDto;
import org.springframework.stereotype.Service;

@Service
public interface AccountService {
    public void duplicateEmail(RegisterReqDto registerReqDto) throws Exception;
    public void register(RegisterReqDto registerReqDto) throws Exception;
}
