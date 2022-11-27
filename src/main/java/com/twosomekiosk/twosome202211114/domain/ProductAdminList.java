package com.twosomekiosk.twosome202211114.domain;


import com.twosomekiosk.twosome202211114.dto.admin.CategoryResponseDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductAdminListReqDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ProductAdminList {
    private int id;
    private String category_name;
    private String pdt_name;
    private int pdt_price;


    public ProductAdminListReqDto toDto() {
        return ProductAdminListReqDto.builder()
                .id(id)
                .category_name(category_name)
                .pdt_name(pdt_name)
                .pdt_price(pdt_price)
                .build();
    }
}
