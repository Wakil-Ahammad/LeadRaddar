package com.leadradar.category;

import com.leadradar.category.dto.KeywordRequest;
import com.leadradar.category.dto.KeywordResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories/{categoryId}/keywords")
@RequiredArgsConstructor
public class KeywordController {

    private final KeywordService keywordService;

    /** Public (authenticated): list all keywords for a category */
    @GetMapping
    public ResponseEntity<List<KeywordResponse>> getByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(keywordService.getByCategory(categoryId));
    }

    /** Admin: add keyword to category */
    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<KeywordResponse> create(
            @PathVariable Long categoryId,
            @Valid @RequestBody KeywordRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(keywordService.create(categoryId, request));
    }

    /** Admin: update keyword */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<KeywordResponse> update(
            @PathVariable Long categoryId,
            @PathVariable Long id,
            @Valid @RequestBody KeywordRequest request) {
        return ResponseEntity.ok(keywordService.update(categoryId, id, request));
    }

    /** Admin: delete keyword */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<Void> delete(
            @PathVariable Long categoryId,
            @PathVariable Long id) {
        keywordService.delete(categoryId, id);
        return ResponseEntity.noContent().build();
    }
}
