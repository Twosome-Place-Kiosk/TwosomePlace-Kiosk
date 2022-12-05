package com.twosomekiosk.twosome202211114.domain.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductUpdateDto {
    private int id;
    private int category_id;
    private String pdt_name;
    private int pdt_price;
    private String origin_name;
    private String save_name;
}
