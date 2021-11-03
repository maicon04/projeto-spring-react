package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SaleSuccessDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String sellerName;
    private long visited;
    private long deals;

    SaleSuccessDTO(){
    }

    public SaleSuccessDTO(Seller seller, long visited, long deals) {
        sellerName = seller.getName();
        this.visited = visited;
        this.deals = deals;
    }
}
