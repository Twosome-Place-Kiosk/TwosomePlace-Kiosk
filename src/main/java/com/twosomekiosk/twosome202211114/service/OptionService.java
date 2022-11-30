package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.dto.OptionCategoryListDto;

import java.util.List;


public interface OptionService {
    public List<OptionCategoryListDto> getOption() throws Exception;
}
