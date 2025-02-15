import javax.persistence.*;
import java.time.LocalDate;

/**
 * Entité représentant une souscription.
 */
@Entity
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Offer offer;

    private LocalDate startDate;

    // Getters et Setters
}
