package com.twosomekiosk.twosome202211114.repository;

import com.twosomekiosk.twosome202211114.domain.OrderList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderRepository {
    public int saveOrder(OrderList orderList) throws Exception;
}
