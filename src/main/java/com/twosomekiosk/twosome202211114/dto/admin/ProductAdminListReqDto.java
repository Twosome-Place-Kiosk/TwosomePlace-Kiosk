package com.twosomekiosk.twosome202211114.dto.admin;


import com.twosomekiosk.twosome202211114.domain.Product;
import com.twosomekiosk.twosome202211114.domain.ProductAdminList;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductAdminListReqDto {
    private int id;
    private int category_id;
    private String category_name;
    private String pdt_name;
    private int pdt_price;


    public ProductAdminList toEntity() {
        return ProductAdminList.builder()
                .id(id)
                .category_id(category_id)
                .category_name(category_name)
                .pdt_name(pdt_name)
                .pdt_price(pdt_price)

                .build();
    }


}
