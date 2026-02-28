package com.leadradar.subscription;

import com.leadradar.common.enums.SubscriptionStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    Optional<Subscription> findByUserId(Long userId);

    Optional<Subscription> findByUserIdAndStatus(Long userId, SubscriptionStatus status);

    Optional<Subscription> findByStripeSubscriptionId(String stripeSubscriptionId);

    @Query("""
        SELECT s FROM Subscription s
        JOIN FETCH s.plan
        WHERE s.user.id = :userId AND s.status = 'ACTIVE'
    """)
    Optional<Subscription> findActiveByUserId(@Param("userId") Long userId);
}
