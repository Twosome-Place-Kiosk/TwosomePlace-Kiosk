package com.twosomekiosk.twosome202211114.api;

import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.service.OptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OptionApi {
    private final OptionService optionService;


    @GetMapping("/main/option")
    public ResponseEntity<?> getOption() throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully", optionService.getOption()));
    }
}
