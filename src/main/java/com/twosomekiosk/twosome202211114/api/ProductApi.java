package com.twosomekiosk.twosome202211114.api;

import com.twosomekiosk.twosome202211114.aop.annotation.LogAspect;
import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProductApi {

    private final ProductService productService;

    @LogAspect
    @GetMapping("/main/{category}")
    public ResponseEntity<?> getCollections(@PathVariable String category, int page) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>("Successfully", productService.getProductList(category, page)));
    }

}
