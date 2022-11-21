package com.twosomekiosk.twosome202211114.repository.admin;

import com.twosomekiosk.twosome202211114.domain.ProductCategory;

import java.util.List;

public interface ProductManagementRepository {
    public List<ProductCategory> getCategoryList() throws Exception;

}
