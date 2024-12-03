describe('Exercice : Ajout de compte et API', () => {
    const apiRoute = '/api/addTest';
    const testDate = new Date().toISOString(); // Date actuelle format ISO
  
    // Tableau des utilisateurs (bonus)
    const users = [
      { nom: 'Dupont', prenom: 'Jean', mail: 'jean.dupont@example.com', password: 'Password1!' },
      { nom: 'Durand', prenom: 'Marie', mail: 'marie.durand@example.com', password: 'Password2!' },
      { nom: 'Martin', prenom: 'Paul', mail: 'paul.martin@example.com', password: 'Password3!' },
      { nom: 'Bernard', prenom: 'Claire', mail: 'claire.bernard@example.com', password: 'Password4!' },
      { nom: 'Lemoine', prenom: 'Alice', mail: 'alice.lemoine@example.com', password: 'Password5!' },
    ];
  
    users.forEach((user, index) => {
      it(`Test utilisateur ${index + 1}: ${user.nom} ${user.prenom}`, () => {
        // Étape 1 : Se connecter à la route /addUser
        cy.visit('https://testing.adrardev.fr/addUser');
  
        // Étape 2 : Remplir les champs avec les données utilisateur
        cy.get('input[name="nom"]').type(user.nom);
        cy.get('input[name="prenom"]').type(user.prenom);
        cy.get('input[name="mail"]').type(user.mail);
        cy.get('input[name="mdp"]').type(user.password);
  
        // Étape 3 : Cliquer sur le bouton submit
        cy.get('input[type="submit"]').click();
  
        // Étape 4 : Vérifier le message d'erreur ou de succès dans #msgzone
        cy.get('#msgzone').then(($msgzone) => {
          const message = $msgzone.text();
  
          // Étape 5 : Si le message est "Le compte a été ajouté en BDD"
          if (message.includes('Le compte a été ajouté en BDD')) {
            // Étape 5.1 : Envoyer une requête POST à /api/addTest avec valid à true
            cy.request('POST', apiRoute, {
              date: testDate,
              testName: `Test utilisateur ${index + 1}`,
              valid: true,
            }).then((response) => {
              expect(response.status).to.eq(201); // Vérifier que la requête API est réussie
            });
          }
  
          // Étape 6 : Si le message est "Les informations sont incorrectes"
          else if (message.includes('Les informations sont incorrectes')) {
            // Étape 6.1 : Envoyer une requête POST à /api/addTest avec valid à false
            cy.request('POST', apiRoute, {
              date: testDate,
              testName: `Test utilisateur ${index + 1}`,
              valid: false,
            }).then((response) => {
              expect(response.status).to.eq(201); // Vérifier que la requête API est réussie
            });
          } else {
            throw new Error(`Message inattendu : "${message}"`);
          }
        });
      });
    });
  });
  