package com.aos.AOSBE.Entity;
import jakarta.persistence.*;

import java.time.*;
import java.math.*;
import java.util.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cost_histories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CostHistories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "cost")
    private double cost;
    @Column(name = "created_at")
    private LocalDate createdAt;
   
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_item_id")
    private ProductItems productItems;





}
