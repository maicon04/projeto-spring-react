package com.devsuperior.dsvendas.entities;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_sellers")
@Getter
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(mappedBy = "seller")
    private List<Sale> sales = new ArrayList<>();

    public Seller() {
    }

    public Seller(Long id, String name) {
        this.id = id;
        this.name = name;
    }


}
