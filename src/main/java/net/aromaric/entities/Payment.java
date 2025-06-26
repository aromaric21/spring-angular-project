package net.aromaric.entities;

import jakarta.persistence.*;
import lombok.*;
import net.aromaric.enumeration.PaymentStatus;
import net.aromaric.enumeration.PaymentType;

import java.time.LocalDate;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Payment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private double amount;
    private PaymentType type;
    private PaymentStatus status;
    private String file;
    // Full payments for a Student
    @ManyToOne
    private Student student;
}
