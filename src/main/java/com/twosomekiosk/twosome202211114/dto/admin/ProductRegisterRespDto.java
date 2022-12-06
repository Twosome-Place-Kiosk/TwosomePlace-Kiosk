package com.twosomekiosk.twosome202211114.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRegisterRespDto {

    private List<MultipartFile> files;

    private int id;
    private int category;
    private String name;
    private int price;
    private String originName;
    private String img;
}
