package com.twosomekiosk.twosome202211114.repository.admin;

import com.twosomekiosk.twosome202211114.domain.Product;
import com.twosomekiosk.twosome202211114.domain.ProductAdminList;
import com.twosomekiosk.twosome202211114.domain.ProductCategory;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public List<ProductCategory> getCategoryList() throws Exception;
    public int saveProductMst(List<Product> products) throws Exception;
    public List<ProductAdminList> addAdminList() throws Exception;
    public int updateProduct(List<Product> products)throws Exception;
    public int deleteProduct(ProductAdminList product) throws Exception;


}
