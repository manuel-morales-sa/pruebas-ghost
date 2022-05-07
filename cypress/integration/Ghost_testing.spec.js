const user = "d.moralesa2@uniandes.edu.co";
const password = "Bogota2022";

describe("Probando cypress sobre Ghost", function () {
  it("visits los estudiantes and survives monkeys", function () {
   //Función para loguearse en la app
    Login(user, password);
    Create_Publish_Post();
    //Update_Publish_Post();
    Publish_to_unpublish();
  });
});

function Login(user, password) {
    // Pruebas pra hacer login y empezar a realizar las pruebas
    cy.visit("http://localhost:2368/ghost/#/site");
    cy.get('#ember8').type(user);
    cy.get('#ember10').type(password);
    cy.get('#ember12 > span').click();
    cy.wait(1000);
  }

  function Create_Publish_Post(){
    cy.get('#ember28').click();
    cy.wait(1000);
    cy.get('#ember29 > span').click();
    cy.wait(1000);
    cy.get('.gh-editor-title').type('Segunda Guerra Mundial');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('Guerra entre los aliados y las potencias del Eje');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('{enter}');
    cy.wait(1000);
    cy.get('.gh-publishmenu').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
    cy.wait(5000);
}