package com.twosomekiosk.twosome202211114.dto.admin;


import com.twosomekiosk.twosome202211114.domain.ProductAdminList;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductAdminListReqDto {
    private int id;
    private String category_name;
    private String pdt_name;
    private int pdt_price;



}
