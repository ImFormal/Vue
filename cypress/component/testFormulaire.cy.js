describe('Formulaire d\'ajout d\'utilisateur', () => {
  beforeEach(() => {
    // Aller à l'URL du formulaire avant chaque test
    cy.visit('https://testing.adrardev.fr/addUser');
  });

  it('Vérifie que tous les champs sont bien remplis avant la soumission', () => {
    // Remplir partiellement le formulaire
    cy.get('input[name="nom"]').type('Dupont');
    cy.get('input[name="prenom"]').type('Jean');
    cy.get('input[name="mail"]').type('jean.dupont@example.com');
    // Ne pas remplir le mot de passe

    // Soumettre le formulaire
    cy.get('input[type="submit"]').click();

    // Vérifier qu'un message d'erreur est affiché
    cy.get('#msgzone').should('contain.text', 'Veuillez remplir tous les champs du formulaire');
  });

  it('Ajoute un nouvel utilisateur avec succès', () => {
    // Remplir correctement le formulaire
    cy.get('input[name="nom"]').type('Dupont');
    cy.get('input[name="prenom"]').type('Gilles');
    cy.get('input[name="mail"]').type('gilles.dupont@example.com');
    cy.get('input[name="mdp"]').type('MotDePasse123');

    // Soumettre le formulaire
    cy.get('input[type="submit"]').click();

    // Vérifier le message de confirmation
    cy.get('#msgzone').should('contain.text', 'Le compte a été ajouté en BDD');
  });

  it('Empêche l\'ajout d\'un utilisateur en double', () => {
    // Ajouter une première fois
    cy.get('input[name="nom"]').type('Dupont');
    cy.get('input[name="prenom"]').type('Jean');
    cy.get('input[name="mail"]').type('jean.dupont@example.com');
    cy.get('input[name="mdp"]').type('MotDePasse123');
    cy.get('input[type="submit"]').click();

    // Réessayer avec les mêmes informations
    cy.get('input[name="nom"]').type('Dupont');
    cy.get('input[name="prenom"]').type('Jean');
    cy.get('input[name="mail"]').type('jean.dupont@example.com');
    cy.get('input[name="mdp"]').type('MotDePasse123');
    cy.get('input[type="submit"]').click();

    // Vérifier que le message d'erreur pour doublon est affiché
    cy.get('#msgzone').should('contain.text', 'Les informations sont incorrectes');
  });
});
