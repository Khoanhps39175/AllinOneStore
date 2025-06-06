package com.aos.AOSBE.Repository;

import com.aos.AOSBE.Entity.PromotionProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionProductRepository extends JpaRepository<PromotionProduct, Integer> {
    // Add custom query methods here if needed
}
