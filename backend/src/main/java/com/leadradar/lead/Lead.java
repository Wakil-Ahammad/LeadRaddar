package com.leadradar.lead;

import com.leadradar.category.Category;
import com.leadradar.common.enums.LeadStatus;
import com.leadradar.admin.AdminTeam;
import com.leadradar.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 500)
    private String title;

    @Column(nullable = false, length = 500)
    private String snippet;

    @Column(nullable = false, length = 50)
    private String platform;

    @Column(nullable = false, unique = true, length = 2048)
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "intent_score")
    @Builder.Default
    private Integer intentScore = 0;

    @Enumerated(EnumType.STRING)
    @Column(name = "lead_status", nullable = false)
    @Builder.Default
    private LeadStatus leadStatus = LeadStatus.ACTIVE;

    @Column(name = "manual_source", nullable = false)
    @Builder.Default
    private Boolean manualSource = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by_id")
    private User createdBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private AdminTeam team;

    @Column(name = "posted_at")
    private LocalDateTime postedAt;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
