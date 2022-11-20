package com.twosomekiosk.twosome202211114.exception;

public class CustomInternalServerErrorException extends RuntimeException{
    public CustomInternalServerErrorException(String message) {
        super(message);
    }

}
