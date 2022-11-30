package com.twosomekiosk.twosome202211114.repository;

import com.twosomekiosk.twosome202211114.domain.CollectionsProduct;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String, Object> map) throws Exception;

}
