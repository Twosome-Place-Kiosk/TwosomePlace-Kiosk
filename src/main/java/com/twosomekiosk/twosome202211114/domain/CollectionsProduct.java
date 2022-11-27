package com.twosomekiosk.twosome202211114.domain;

import com.twosomekiosk.twosome202211114.dto.CollectionListRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CollectionsProduct {
    private int category_id;
    private String pdt_name;
    private int pdt_price;
    private String origin_name;
    private int product_total_count;

    public CollectionListRespDto toDto() {
        return CollectionListRespDto.builder()
                .categoryId(category_id)
                .productName(pdt_name)
                .productPrice(pdt_price)
                .mainImg(origin_name)
                .productTotalCount(product_total_count)
                .build();
    }
}
