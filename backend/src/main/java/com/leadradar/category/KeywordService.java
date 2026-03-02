package com.leadradar.category;

import com.leadradar.category.dto.KeywordRequest;
import com.leadradar.category.dto.KeywordResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KeywordService {

    private final KeywordRepository keywordRepository;
    private final CategoryRepository categoryRepository;

    // ─── Read ───────────────────────────────────────────────────────────────

    public List<KeywordResponse> getByCategory(Long categoryId) {
        ensureCategoryExists(categoryId);
        return keywordRepository.findByCategoryId(categoryId)
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    // ─── Write ──────────────────────────────────────────────────────────────

    @Transactional
    public KeywordResponse create(Long categoryId, KeywordRequest request) {
        Category category = findCategoryOrThrow(categoryId);

        if (keywordRepository.existsByCategoryIdAndKeyword(categoryId, request.getKeyword())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Keyword already exists in this category: " + request.getKeyword());
        }

        Keyword keyword = Keyword.builder()
                .category(category)
                .keyword(request.getKeyword())
                .weight(request.getWeight() != null ? request.getWeight() : 5)
                .build();
        return toResponse(keywordRepository.save(keyword));
    }

    @Transactional
    public KeywordResponse update(Long categoryId, Long keywordId, KeywordRequest request) {
        ensureCategoryExists(categoryId);
        Keyword keyword = findKeywordOrThrow(keywordId);

        if (!keyword.getCategory().getId().equals(categoryId)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Keyword does not belong to the specified category");
        }

        // Allow rename only if it won't collide with another keyword in same category
        if (!keyword.getKeyword().equalsIgnoreCase(request.getKeyword())
                && keywordRepository.existsByCategoryIdAndKeyword(categoryId, request.getKeyword())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Keyword already exists in this category: " + request.getKeyword());
        }

        keyword.setKeyword(request.getKeyword());
        if (request.getWeight() != null) {
            keyword.setWeight(request.getWeight());
        }
        return toResponse(keywordRepository.save(keyword));
    }

    @Transactional
    public void delete(Long categoryId, Long keywordId) {
        ensureCategoryExists(categoryId);
        Keyword keyword = findKeywordOrThrow(keywordId);

        if (!keyword.getCategory().getId().equals(categoryId)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Keyword does not belong to the specified category");
        }
        keywordRepository.delete(keyword);
    }

    // ─── Helpers ────────────────────────────────────────────────────────────

    private void ensureCategoryExists(Long categoryId) {
        if (!categoryRepository.existsById(categoryId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Category not found: " + categoryId);
        }
    }

    private Category findCategoryOrThrow(Long categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Category not found: " + categoryId));
    }

    private Keyword findKeywordOrThrow(Long id) {
        return keywordRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Keyword not found: " + id));
    }

    private KeywordResponse toResponse(Keyword k) {
        return KeywordResponse.builder()
                .id(k.getId())
                .keyword(k.getKeyword())
                .weight(k.getWeight())
                .categoryId(k.getCategory().getId())
                .categoryName(k.getCategory().getName())
                .createdAt(k.getCreatedAt())
                .updatedAt(k.getUpdatedAt())
                .build();
    }
}
