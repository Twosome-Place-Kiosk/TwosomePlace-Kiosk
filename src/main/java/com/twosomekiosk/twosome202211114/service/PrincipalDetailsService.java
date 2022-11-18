package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.Admin;
import com.twosomekiosk.twosome202211114.repository.AccountRepository;
import com.twosomekiosk.twosome202211114.security.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Admin admin = null;

        try {
            admin = accountRepository.findUserByEmail(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        if(admin == null){
            throw new UsernameNotFoundException("잘못된 사용자 정보");
        }
        return null;
    }
}
