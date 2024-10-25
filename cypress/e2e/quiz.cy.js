describe("Quiz E2E test", () => {
  beforeEach(() => {
    cy.fixture("questions").then((loadedQuestions) => {
      cy.intercept("GET", "/api/questions/random", {
        statusCode: 200,
        body: loadedQuestions, // Using the mocked questions data
      });
    });
  });

  it("should GET a random word with masked letters on page load and reQuiz started and after answering all the questions it shows the score", () => {
    cy.visit("http://127.0.0.1:3001/");

    cy.contains("Start Quiz").click();
    cy.get("h2").should(
      "contain",
      "What is the correct syntax to create a dictionary in Python?"
    );
    cy.get("button").eq(0).click();

    cy.wait(1000);

    cy.get("h2").should(
      "contain",
      "What is the keyword to define a class in Python?"
    );

    cy.get("button").eq(0).click();
    cy.wait(1000);

    cy.contains("Quiz Completed").should("exist");
    cy.contains("Your score").should("exist");
  });
});
