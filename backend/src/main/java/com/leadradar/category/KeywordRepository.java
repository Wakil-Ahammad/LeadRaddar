package com.leadradar.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long> {

    List<Keyword> findByCategoryId(Long categoryId);

    @Query("SELECT k.keyword FROM Keyword k WHERE k.category.id = :categoryId ORDER BY k.weight DESC")
    List<String> findKeywordStringsByCategoryId(Long categoryId);

    @Query("SELECT k FROM Keyword k JOIN FETCH k.category WHERE k.category.isActive = true ORDER BY k.weight DESC")
    List<Keyword> findAllActiveKeywords();

    boolean existsByCategoryIdAndKeyword(Long categoryId, String keyword);
}
