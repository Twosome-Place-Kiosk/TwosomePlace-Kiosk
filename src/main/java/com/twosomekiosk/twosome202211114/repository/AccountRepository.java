package com.twosomekiosk.twosome202211114.repository;

import com.twosomekiosk.twosome202211114.domain.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

    public int admin(Admin admin) throws Exception;

}
