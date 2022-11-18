package com.twosomekiosk.twosome202211114.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                .antMatchers("/admin/product")
                .authenticated()
                .anyRequest()
                .permitAll()
                .and()
                .formLogin()
                .usernameParameter("admin_id")             // username을 email로 바꿔서 받겠다
                .loginPage("/admin/login")            // login page Get 요청
                .loginProcessingUrl("/admin/login")  //login service Post요청
                .defaultSuccessUrl("/admin/product");   //로그인 성공시 이동할 주소
    }
}
