import javax.persistence.*;

/**
 * Entité représentant une offre.
 */
@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String offerName;
    private int durationMonths;
    private double monthlyPrice;

    // Getters et Setters
}
