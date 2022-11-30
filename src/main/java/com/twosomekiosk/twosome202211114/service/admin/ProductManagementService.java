package com.twosomekiosk.twosome202211114.service.admin;

import com.twosomekiosk.twosome202211114.domain.Product;
import com.twosomekiosk.twosome202211114.domain.ProductAdminList;
import com.twosomekiosk.twosome202211114.dto.admin.CategoryResponseDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductAdminListReqDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductRegisterReqDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductRegisterRespDto;

import java.util.List;

public interface ProductManagementService {

    public List<CategoryResponseDto> getCategoryList() throws Exception;

    public void registerMst(ProductRegisterRespDto productRegisterRespDto) throws Exception;

    public List<ProductAdminListReqDto> addAdminList() throws Exception;

    public void updateRegister(ProductRegisterRespDto productRegisterRespDto) throws Exception;

    public void productDelete(ProductAdminListReqDto productAdminListReqDto) throws Exception;


}
