package com.twosomekiosk.twosome202211114.domain;

import com.twosomekiosk.twosome202211114.dto.OptionCategoryListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class OptionCategoryDtl {
    private int id;
    private String option_category_id;
    private String option_name;
    private int option_price;
    private String option_origin_name;

    public OptionCategoryListDto toDto(){
        return OptionCategoryListDto.builder()
                .id(id)
                .optionCategoryId(option_category_id)
                .optionName(option_name)
                .optionPrice(option_price)
                .optionOriginName(option_origin_name)
                .build();
    }

}
