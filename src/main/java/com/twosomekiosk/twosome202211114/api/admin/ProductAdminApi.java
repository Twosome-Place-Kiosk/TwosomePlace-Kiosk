package com.twosomekiosk.twosome202211114.api.admin;

import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/admin")
public class ProductAdminApi {

    private final ProductManagementService productManagementService;

    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok()
                .body(new CMRespDto<>("get successfully", productManagementService.getCategoryList()));
    }
}
