package com.twosomekiosk.twosome202211114.dto.admin;

import com.twosomekiosk.twosome202211114.domain.Product;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Min;

@Builder
@Data
public class ProductRegisterReqDto {

    private int category;
    private String name;
    @Min(value = 100, message = "최소 가격은 100원입니다.")
    private int price;
    private String image;


    public Product toEntity() {
        return Product.builder()
                .category_id((category))
                .pdt_name(name)
                .pdt_price(price)

                .build();
    }
}
