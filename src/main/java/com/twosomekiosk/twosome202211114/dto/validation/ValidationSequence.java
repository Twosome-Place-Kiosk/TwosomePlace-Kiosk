package com.twosomekiosk.twosome202211114.dto.validation;


import javax.validation.GroupSequence;
import javax.validation.groups.Default;

@GroupSequence({
        ValidationGroups.NotBlankGroup.class,
        ValidationGroups.SizeGroup.class,
        ValidationGroups.PatternCheckGroup.class,
        Default.class
})
public interface ValidationSequence {}
