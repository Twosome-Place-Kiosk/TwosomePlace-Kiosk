package com.twosomekiosk.twosome202211114.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class OrderList {
    private int id;
    private int pdt_status;
    private String order_time;
    private String order_date;
}
