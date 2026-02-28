package com.leadradar.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminTeamMemberRepository extends JpaRepository<AdminTeamMember, Long> {

    List<AdminTeamMember> findByTeamId(Long teamId);

    List<AdminTeamMember> findByUserId(Long userId);

    Optional<AdminTeamMember> findByTeamIdAndUserId(Long teamId, Long userId);

    boolean existsByTeamIdAndUserId(Long teamId, Long userId);
}
