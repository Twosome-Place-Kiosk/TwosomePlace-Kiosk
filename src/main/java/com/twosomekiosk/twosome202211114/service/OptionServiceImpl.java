package com.twosomekiosk.twosome202211114.service;

import com.twosomekiosk.twosome202211114.dto.OptionCategoryListDto;
import com.twosomekiosk.twosome202211114.repository.OptionRepository;
import com.twosomekiosk.twosome202211114.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OptionServiceImpl implements OptionService{

    private final OptionRepository optionRepository;

    @Override
    public List<OptionCategoryListDto> getOption() throws Exception {
        List<OptionCategoryListDto> optionList = new ArrayList<OptionCategoryListDto>();

        optionRepository.getOption().forEach(optionCategoryListDto -> {
            optionList.add(optionCategoryListDto.toDto());
        });

        return optionList;
    }
}
