package net.aromaric.dtos;

import lombok.*;
import net.aromaric.enumeration.PaymentStatus;
import net.aromaric.enumeration.PaymentType;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class PaymentDto {
    private Long id;
    private LocalDate date;
    private double amount;
    private PaymentType type;
    private PaymentStatus status;
}
