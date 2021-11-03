package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SaleSumDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    private String sellerName;
    private Double sum;

    SaleSumDTO(){
    }

    public SaleSumDTO(Seller seller, Double sum) {
        this.sellerName = seller.getName();
        this.sum = sum;
    }
}
