const user = "d.moralesa2@uniandes.edu.co";
const password = "Bogota2022";

describe("Probando cypress sobre Ghost", function () {
  it("visits los estudiantes and survives monkeys", function () {
   //Función para loguearse en la app
    Login(user, password);
    //Create_Publish_Post();
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

