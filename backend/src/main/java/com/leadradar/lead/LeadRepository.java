package com.leadradar.lead;

import com.leadradar.common.enums.LeadStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {

    boolean existsByUrl(String url);

    Page<Lead> findByLeadStatus(LeadStatus status, Pageable pageable);

    Page<Lead> findByPlatform(String platform, Pageable pageable);

    Page<Lead> findByCategoryId(Long categoryId, Pageable pageable);

    @Query("""
        SELECT l FROM Lead l
        WHERE (:platform IS NULL OR l.platform = :platform)
          AND (:categoryId IS NULL OR l.category.id = :categoryId)
          AND (:status IS NULL OR l.leadStatus = :status)
          AND (:search IS NULL OR LOWER(l.title) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(l.snippet) LIKE LOWER(CONCAT('%', :search, '%')))
          AND (:minScore IS NULL OR l.intentScore >= :minScore)
        ORDER BY l.createdAt DESC
    """)
    Page<Lead> findWithFilters(
        @Param("platform") String platform,
        @Param("categoryId") Long categoryId,
        @Param("status") LeadStatus status,
        @Param("search") String search,
        @Param("minScore") Integer minScore,
        Pageable pageable
    );

    @Query("SELECT COUNT(l) FROM Lead l WHERE l.createdAt >= :since")
    long countNewLeadsSince(@Param("since") LocalDateTime since);

    @Query("SELECT DISTINCT l.platform FROM Lead l ORDER BY l.platform")
    List<String> findDistinctPlatforms();

    @Query("SELECT COUNT(l) FROM Lead l WHERE l.platform = :platform")
    long countByPlatform(@Param("platform") String platform);

    @Query("""
        SELECT l.category.name, COUNT(l) 
        FROM Lead l 
        WHERE l.category IS NOT NULL 
        GROUP BY l.category.name
    """)
    List<Object[]> countByCategory();
}
