import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Classe de service pour gérer les clients.
 */
@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    /**
     * Ajouter un nouveau client.
     * @param client le client à ajouter
     * @return le client ajouté
     */
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    /**
     * Obtenir tous les clients.
     * @return une liste de tous les clients
     */
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    /**
     * Obtenir un client par son nom de famille.
     * @param lastName le nom de famille du client
     * @return un Optional contenant le client trouvé ou vide si aucun client trouvé
     */
    public Optional<Client> getClientByLastName(String lastName) {
        return clientRepository.findByLastName(lastName);
    }

    /**
     * Mettre à jour un client.
     * @param client le client à mettre à jour
     * @return le client mis à jour
     */
    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }

    /**
     * Supprimer un client par son identifiant.
     * @param id l'identifiant du client à supprimer
     */
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
