import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Classe de service pour gérer les offres.
 */
@Service
public class OfferService {
    @Autowired
    private OfferRepository offerRepository;

    /**
     * Ajouter une nouvelle offre.
     * @param offer l'offre à ajouter
     * @return l'offre ajoutée
     */
    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    /**
     * Obtenir toutes les offres.
     * @return une liste de toutes les offres
     */
    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    /**
     * Mettre à jour une offre.
     * @param offer l'offre à mettre à jour
     * @return l'offre mise à jour
     */
    public Offer updateOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    /**
     * Supprimer une offre par son identifiant.
     * @param id l'identifiant de l'offre à supprimer
     */
    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }
}
