import javax.persistence.*;
import java.time.LocalDate;

/**
 * Entité représentant un client.
 */
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String lastName;
    private String firstName;
    private LocalDate registrationDate;
    private String phoneNumber;
    private boolean activeSubscription;

    // Getters et Setters
}
