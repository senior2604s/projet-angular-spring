import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Contrôleur REST pour gérer les offres.
 */
@RestController
@RequestMapping("/api/offers")
public class OfferController {
    @Autowired
    private OfferService offerService;

    /**
     * Ajouter une nouvelle offre.
     * @param offer l'offre à ajouter
     * @return l'offre ajoutée
     */
    @PostMapping
    public Offer addOffer(@RequestBody Offer offer) {
        return offerService.addOffer(offer);
    }

    /**
     * Obtenir toutes les offres.
     * @return une liste de toutes les offres
     */
    @GetMapping
    public List<Offer> getAllOffers() {
        return offerService.getAllOffers();
    }

    /**
     * Mettre à jour une offre.
     * @param offer l'offre à mettre à jour
     * @return l'offre mise à jour
     */
    @PutMapping
    public Offer updateOffer(@RequestBody Offer offer) {
        return offerService.updateOffer(offer);
    }

    /**
     * Supprimer une offre par son identifiant.
     * @param id l'identifiant de l'offre à supprimer
     */
    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable Long id) {
        offerService.deleteOffer(id);
    }
}
