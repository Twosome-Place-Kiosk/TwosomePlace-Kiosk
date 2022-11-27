package com.twosomekiosk.twosome202211114.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CollectionListRespDto {
    private int categoryId;
    private String productName;
    private int productPrice;
    private String mainImg;
    private int productTotalCount;

}
