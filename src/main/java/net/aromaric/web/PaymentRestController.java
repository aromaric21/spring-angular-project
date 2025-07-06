package net.aromaric.web;

import net.aromaric.entities.Payment;
import net.aromaric.entities.Student;
import net.aromaric.enumeration.PaymentStatus;
import net.aromaric.enumeration.PaymentType;
import net.aromaric.repository.PaymentRepository;
import net.aromaric.repository.StudentRepository;
import net.aromaric.services.PaymentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;


@RestController
@CrossOrigin("*")
public class PaymentRestController {

    private final StudentRepository studentRepository;
    private final  PaymentRepository paymentRepository;
    private  PaymentService paymentService;

    public PaymentRestController(StudentRepository studentRepository,
                                 PaymentRepository paymentRepository,
                                 PaymentService paymentService){
        this.studentRepository = studentRepository;
        this.paymentRepository = paymentRepository;
        this.paymentService = paymentService;
    }


    // List of all payments
    // http://localhost:8021/payments
    @GetMapping(path = "/payments")
    public List<Payment> allPayments(){
        return paymentRepository.findAll();
    }

    //Get student payment
    // // http://localhost:8021/students/code/payments
    @GetMapping(path = "/students/{code}/payments")
    public List<Payment> paymentsByStudent(@PathVariable String code){
        return paymentRepository.findByStudentCode(code);
    }

    //Get payment by status
    // // http://localhost:8021/payments/status
    @GetMapping(path = "/payments/byStatus")
    public List<Payment> paymentsByStatus(@RequestParam PaymentStatus status){
        return paymentRepository.findByStatus(status);
    }

    //Get payment by type
    // // http://localhost:8021/payments/type
    @GetMapping(path = "/payments/byType")
    public List<Payment> paymentsByType(@RequestParam PaymentType type){
        return paymentRepository.findByType(type);
    }

    // Get a payment by id
    // http://localhost:8021/payments/id
    @GetMapping(path = "/payments/{id}")
    public Payment getPaymentById(@PathVariable Long id){
        return paymentRepository.findById(id).get();
    }

    // Get all students
    // http://localhost:8021/students
    @GetMapping(path = "/students")
    public List<Student> allStudents(){
        return studentRepository.findAll();
    }

    // Get a student by id
    // http://localhost:8021/students/id
    @GetMapping(path = "/students/{id}")
    public Student getStudentById(@PathVariable String id){
        return studentRepository.findById(id).get();
    }

    // Get a student by code
    // http://localhost:8021/students/code
    @GetMapping(path = "/students/{code}")
    public Student getStudentByCode(@PathVariable String code){
        return studentRepository.findByCode(code);
    }

    //Get a list of students by programId
    // http://localhost:8021/students/programId
    @GetMapping(path = "/studentsByProgramId")
    public List<Student> getStudentsByProgramId(@RequestParam String programId){
        return  studentRepository.findByProgramId(programId);
    }

    // Method to update payment status
    @PutMapping(path = "/payment/{id}")
    public Payment updatePaymentStatus(@RequestParam PaymentStatus status,
                                       @PathVariable Long id){
        return this.paymentService.updatePaymentStatus(status, id);
    }

    // Save a payment
    @PostMapping(path = "/payments", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Payment savepayment(@RequestParam MultipartFile file, LocalDate date, double amount,
                               PaymentType type, String studentCode) throws IOException {
        return this.paymentService.savepayment(file, date, amount, type, studentCode);
    }

    @GetMapping(path = "/paymentFile/{paymentId}", produces = {MediaType.APPLICATION_PDF_VALUE})
    public byte[] getPaymentFile(@PathVariable Long paymentId) throws IOException {
        return  this.paymentService.getPaymentFile(paymentId);
    }
}
