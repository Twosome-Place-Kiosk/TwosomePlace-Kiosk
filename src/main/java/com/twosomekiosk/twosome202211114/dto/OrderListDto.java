package com.twosomekiosk.twosome202211114.dto;

import com.twosomekiosk.twosome202211114.domain.OrderList;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderListDto {
    private int id;
    private int pdtStatus;
    private String orderTime;
    private String orderDate;

    public OrderList toEntity() {
        return OrderList.builder()
                .id(id)
                .pdt_status(pdtStatus)
                .order_time(orderTime)
                .order_date(orderDate)
                .build();
    }
}
