import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Contrôleur REST pour gérer les clients.
 */
@RestController
@RequestMapping("/api/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    /**
     * Ajouter un nouveau client.
     * @param client le client à ajouter
     * @return le client ajouté
     */
    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return clientService.addClient(client);
    }

    /**
     * Obtenir tous les clients.
     * @return une liste de tous les clients
     */
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    /**
     * Obtenir un client par son nom de famille.
     * @param lastName le nom de famille du client
     * @return un Optional contenant le client trouvé ou vide si aucun client trouvé
     */
    @GetMapping("/{lastName}")
    public Optional<Client> getClientByLastName(@PathVariable String lastName) {
        return clientService.getClientByLastName(lastName);
    }

    /**
     * Mettre à jour un client.
     * @param client le client à mettre à jour
     * @return le client mis à jour
     */
    @PutMapping
    public Client updateClient(@RequestBody Client client) {
        return clientService.updateClient(client);
    }

    /**
     * Supprimer un client par son identifiant.
     * @param id l'identifiant du client à supprimer
     */
    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }
}
