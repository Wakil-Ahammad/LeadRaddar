package com.leadradar.category.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class KeywordRequest {

    @NotBlank(message = "Keyword is required")
    @Size(max = 255, message = "Keyword must be at most 255 characters")
    private String keyword;

    @Min(value = 1, message = "Weight must be between 1 and 10")
    @Max(value = 10, message = "Weight must be between 1 and 10")
    private Integer weight = 5;
}
