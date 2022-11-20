package com.twosomekiosk.twosome202211114.dto;

import com.twosomekiosk.twosome202211114.domain.User;
import com.twosomekiosk.twosome202211114.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {
//    private int id;

    @Size(min = 1, max = 16, message = "아이디는 16글자까지만 입력가능합니다." ,groups = ValidationGroups.SizeGroup.class)
    @NotBlank(message = "아이디는 비워 둘 수 없습니다." , groups = ValidationGroups.NotBlankGroup.class)
    @Pattern(regexp = "^[a-z0-9]{1,16}$", message = "아이디는 영어와 숫자, 영어 소문자만 입력 가능합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String user_name;

    @NotBlank(message = "이메일은 비워 둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Email
    private String email;

    @NotBlank(message = "비밀번호는 비워 둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 4, max = 8, message = "비밀번호는 4자부터 8자까지 입력하여야 합니다", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-!@#$%^&*_]*$", message = "비밀번호는 특수기호, 영문, 숫자를 모두 포함해야합니다.", groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    @NotBlank(message = "이름은 비워 둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 4, message = "이름은 4글자까지만 입력가능합니다", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^[가-힇]*$", message = "한글만 입력가능합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String name;

    public User toEntity(){
        return User.builder()
                .user_name(user_name)
                .email(email)
                .password(new BCryptPasswordEncoder().encode(password))
                .name(name)
                .role_id(1)
                .build();
    }
}
