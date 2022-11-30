package com.twosomekiosk.twosome202211114.dto;

import com.twosomekiosk.twosome202211114.domain.OptionCategoryDtl;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class OptionCategoryListDto {
    private int id;
    private String optionCategoryId;
    private String optionName;
    private int optionPrice;
    private String optionOriginName;

    public OptionCategoryDtl toEntity() {
        return OptionCategoryDtl.builder()
                .option_category_id(optionCategoryId)
                .option_name(optionName)
                .option_price(optionPrice)
                .option_origin_name(optionOriginName)
                .build();
    }
}
