package com.twosomekiosk.twosome202211114.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private String id;
    private String email;
    private String password;
    private String name;
    private int role_id;
    private LocalDateTime create_date;
    private LocalDateTime update_date;
}
