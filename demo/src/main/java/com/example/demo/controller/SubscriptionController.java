import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Contrôleur REST pour gérer les souscriptions.
 */
@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    /**
     * Ajouter une nouvelle souscription.
     * @param subscription la souscription à ajouter
     * @return la souscription ajoutée
     */
    @PostMapping
    public Subscription addSubscription(@RequestBody Subscription subscription) {
        return subscriptionService.addSubscription(subscription);
    }

    /**
     * Obtenir toutes les souscriptions.
     * @return une liste de toutes les souscriptions
     */
    @GetMapping
    public List<Subscription> getAllSubscriptions() {
        return subscriptionService.getAllSubscriptions();
    }

    /**
     * Supprimer une souscription par son identifiant.
     * @param id l'identifiant de la souscription à supprimer
     */
    @DeleteMapping("/{id}")
    public void deleteSubscription(@PathVariable Long id) {
        subscriptionService.deleteSubscription(id);
    }
}
