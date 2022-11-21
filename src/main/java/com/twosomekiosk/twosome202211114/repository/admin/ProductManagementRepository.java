package com.twosomekiosk.twosome202211114.repository.admin;

import com.twosomekiosk.twosome202211114.domain.Product;
import com.twosomekiosk.twosome202211114.domain.ProductCategory;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public List<ProductCategory> getCategoryList() throws Exception;
    public int saveProductMst(Product product) throws Exception;


}
