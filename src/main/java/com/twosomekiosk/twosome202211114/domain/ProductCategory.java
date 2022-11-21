package com.twosomekiosk.twosome202211114.domain;

import com.twosomekiosk.twosome202211114.dto.admin.CategoryResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductCategory {
    private int id;
    private String category_name;

    public CategoryResponseDto toDto() {
        return CategoryResponseDto.builder()
                .id(id)
                .name(category_name)
                .build();
    }


}
