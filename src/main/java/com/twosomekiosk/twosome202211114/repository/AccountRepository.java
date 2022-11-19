package com.twosomekiosk.twosome202211114.repository;

import com.twosomekiosk.twosome202211114.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

//    public int admin(User user) throws Exception;

    public User findUserByEmail(String email) throws Exception;
}
