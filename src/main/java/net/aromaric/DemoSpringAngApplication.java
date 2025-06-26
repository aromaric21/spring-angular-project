package net.aromaric;

import net.aromaric.entities.Payment;
import net.aromaric.entities.Student;
import net.aromaric.enumeration.PaymentStatus;
import net.aromaric.enumeration.PaymentType;
import net.aromaric.repository.PaymentRepository;
import net.aromaric.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class DemoSpringAngApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoSpringAngApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(StudentRepository studentRepository,
										PaymentRepository paymentRepository){
		return args -> {
			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
							.firstName("Mohamed").code("112233").programId("SDIA")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Romaric").code("112244").programId("SDIA")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Yasmine").code("112255").programId("GLSID")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Bawarne").code("112266").programId("BDCC")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Chamak").code("112277").programId("BDCC")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Herwann").code("112288").programId("BDCC")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Youssfi").code("112299").programId("BDGL")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Isaac").code("11221010").programId("BDGL")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Paul").code("11221111").programId("SDIA")
					.build());

			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Victoire").code("11221212").programId("BDGL")
					.build());

			PaymentType[] paymentTypes = PaymentType.values();
			Random random = new Random();
			studentRepository.findAll().forEach(st -> {
				for (int i=0; i <10; i++){
					int index = random.nextInt(paymentTypes.length);
					Payment payment = Payment.builder()
							.amount(1000+(int)(Math.random()+20000))
							.type(paymentTypes[index])
							.status(PaymentStatus.CREATED)
							.date(LocalDate.now())
							.student(st)
							.build();
					paymentRepository.save(payment);
				}
			});
		};
	}

}
