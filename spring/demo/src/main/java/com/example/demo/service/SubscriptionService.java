import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Classe de service pour gérer les souscriptions.
 */
@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    /**
     * Ajouter une nouvelle souscription.
     * @param subscription la souscription à ajouter
     * @return la souscription ajoutée
     */
    public Subscription addSubscription(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    /**
     * Obtenir toutes les souscriptions.
     * @return une liste de toutes les souscriptions
     */
    public List<Subscription> getAllSubscriptions() {
        return subscriptionRepository.findAll();
    }

    /**
     * Supprimer une souscription par son identifiant.
     * @param id l'identifiant de la souscription à supprimer
     */
    public void deleteSubscription(Long id) {
        subscriptionRepository.deleteById(id);
    }
}
