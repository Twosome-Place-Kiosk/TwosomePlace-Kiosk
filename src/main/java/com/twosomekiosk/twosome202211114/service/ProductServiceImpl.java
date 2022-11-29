package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.CollectionsProduct;
import com.twosomekiosk.twosome202211114.dto.CollectionListRespDto;
import com.twosomekiosk.twosome202211114.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl  implements ProductService{

    private final ProductRepository productRepository;

    @Override
    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception {
        List<CollectionListRespDto> productList = new ArrayList<CollectionListRespDto>();

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("category", category);
        map.put("index", (page -1) * 16);
        productRepository.getProductList(map).forEach(collectionListRespDto -> {
            productList.add(collectionListRespDto.toDto());
        });
        return productList;
    }

//    @Override
//    public void getOptionHeader(String pdt_id) throws Exception {
//        List<CollectionListRespDto> optionList = new ArrayList<CollectionListRespDto>();
//
//        Map<String, Object> map = new HashMap<String, Object>();
//        map.put()
//
//        return null;
//    }
}
