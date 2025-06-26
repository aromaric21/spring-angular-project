package net.aromaric.repository;

import net.aromaric.entities.Payment;
import net.aromaric.entities.Student;
import net.aromaric.enumeration.PaymentStatus;
import net.aromaric.enumeration.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findByStudentCode(String code);
    List<Payment> findByStatus(PaymentStatus status);
    List<Payment> findByType(PaymentType type);
}
