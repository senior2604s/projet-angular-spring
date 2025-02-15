import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Interface de dépôt pour gérer les clients.
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    /**
     * Trouver un client par son nom de famille.
     * @param lastName le nom de famille du client
     * @return un Optional contenant le client trouvé ou vide si aucun client trouvé
     */
    Optional<Client> findByLastName(String lastName);
}
