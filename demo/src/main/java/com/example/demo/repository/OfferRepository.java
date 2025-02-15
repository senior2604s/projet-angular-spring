import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface de dépôt pour gérer les offres.
 */
@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {
}
