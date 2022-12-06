package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.domain.OrderList;
import com.twosomekiosk.twosome202211114.dto.OrderListDto;
import com.twosomekiosk.twosome202211114.exception.CustomInternalServerErrorException;
import com.twosomekiosk.twosome202211114.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
    private final OrderRepository orderRepository;

    @Override
    public void saveOrder(OrderListDto orderListDto) throws Exception {

        if(orderRepository.saveOrder(orderListDto.toEntity()) == 0){ //insert 안 되면
            throw new CustomInternalServerErrorException("상품 등록 실패"); //이 에러를 띄워라.
        }

//        List<OrderList> orderList = new ArrayList<OrderList>();
//
//        orderList.add(OrderList.builder()
//                .pdt_status(orderListDto.getPdtStatus())
//                .order_time(orderListDto.getOrderTime())
//                .order_date(orderListDto.getOrderDate())
//                .build());
//        orderRepository.saveOrder(orderList);
    }

}
