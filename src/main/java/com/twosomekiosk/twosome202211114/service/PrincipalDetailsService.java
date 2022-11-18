package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.User;
import com.twosomekiosk.twosome202211114.repository.AccountRepository;
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
        User user = null;

        try {
            user = accountRepository.findUserByEmail(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        if(user == null){
            throw new UsernameNotFoundException("잘못된 사용자 정보");
        }
        return null;
    }
}
