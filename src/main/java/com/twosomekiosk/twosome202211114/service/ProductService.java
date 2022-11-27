package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.dto.CollectionListRespDto;

import java.util.List;

public interface ProductService {

    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception;
}
