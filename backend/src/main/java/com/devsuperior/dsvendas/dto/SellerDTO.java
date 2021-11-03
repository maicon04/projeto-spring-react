package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SellerDTO implements Serializable {

    private static final long serialVersionUID = 1;
    private Long id;
    private String name;

    public SellerDTO(){
    }
    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    public SellerDTO(Seller entity) {
        id = entity.getId();
        name = entity.getName();
    }
}
