package com.twosomekiosk.twosome202211114.api.admin;

import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductRegisterReqDto;
import com.twosomekiosk.twosome202211114.dto.admin.ProductRegisterRespDto;
import com.twosomekiosk.twosome202211114.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/product")
    public ResponseEntity<?> registerMst(ProductRegisterRespDto productRegisterRespDto) throws Exception {

        productManagementService.registerMst(productRegisterRespDto);

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Successfully", true));
    }


    @GetMapping("/product/list")
    public ResponseEntity<?> addAdminList() throws Exception {

        return ResponseEntity.ok()
                .body(new CMRespDto<>("get successfully", productManagementService.addAdminList()));
    }


}
