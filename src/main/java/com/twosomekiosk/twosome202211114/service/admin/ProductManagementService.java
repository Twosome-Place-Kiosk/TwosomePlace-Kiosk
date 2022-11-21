package com.twosomekiosk.twosome202211114.service.admin;

import com.twosomekiosk.twosome202211114.dto.admin.CategoryResponseDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductRegisterReqDto;

import java.util.List;

public interface ProductManagementService {

    public List<CategoryResponseDto> getCategoryList() throws Exception;

    public void registerMst(ProductRegisterReqDto productRegisterReqDto) throws Exception;

}
