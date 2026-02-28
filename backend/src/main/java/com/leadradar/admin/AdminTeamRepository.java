package com.leadradar.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminTeamRepository extends JpaRepository<AdminTeam, Long> {

    boolean existsByTeamName(String teamName);
}
