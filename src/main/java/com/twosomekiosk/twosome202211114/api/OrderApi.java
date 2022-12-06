package com.twosomekiosk.twosome202211114.api;

import com.twosomekiosk.twosome202211114.dto.CMRespDto;
import com.twosomekiosk.twosome202211114.dto.OrderListDto;
import com.twosomekiosk.twosome202211114.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OrderApi {
    private final OrderService orderService;

    @PostMapping("/order")
    public ResponseEntity<?> saveOrder(@RequestBody OrderListDto orderListDto) throws Exception {
        orderService.saveOrder(orderListDto);

        return ResponseEntity.created(null).body(new CMRespDto<>("Order Successfully", true));
    }
}
