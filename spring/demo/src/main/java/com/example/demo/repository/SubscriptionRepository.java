import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface de dépôt pour gérer les souscriptions.
 */
@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}
