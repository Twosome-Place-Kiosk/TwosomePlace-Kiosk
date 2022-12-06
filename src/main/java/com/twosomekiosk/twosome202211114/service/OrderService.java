package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.dto.OrderListDto;

public interface OrderService {
    public void saveOrder(OrderListDto orderListDto) throws Exception;
}
