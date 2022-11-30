package com.twosomekiosk.twosome202211114.repository;

import com.twosomekiosk.twosome202211114.domain.OptionCategoryDtl;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OptionRepository {

    public List<OptionCategoryDtl> getOption() throws Exception;

}
