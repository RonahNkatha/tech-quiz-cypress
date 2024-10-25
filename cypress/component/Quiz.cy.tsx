import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  beforeEach(() => {
    cy.mount(<Quiz />);
  });

  it("should render the quiz with the start button", () => {
    cy.get("button").should("exist").and("have.text", "Start Quiz");
  });

  it("should be able to click the button", () => {
    cy.get("button").should("exist").and("have.text", "Start Quiz").click();
  });

  it("should display the first question on the screen", () => {
    cy.get("button").should("exist").and("have.text", "Start Quiz").click();
    cy.wait(1000);
    cy.get(".card").should("exist");
  });

  it("should complete the quiz after answering all the questions", () => {
    cy.get("button").should("exist").and("have.text", "Start Quiz").click();
    cy.wait(1000);
    cy.get(".card").should("exist");

    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").eq(0).click();
      cy.wait(1000);
    }

    cy.get("h2").should("exist").and("have.text", "Quiz Completed");
  });

  it("should display the score when the quiz is completed", () => {
    cy.get("button").should("exist").and("have.text", "Start Quiz").click();
    cy.wait(1000);
    cy.get(".card").should("exist");

    for (let i = 0; i < 10; i++) {
      cy.get(".btn.btn-primary").eq(0).click();
      cy.wait(1000);
    }

    cy.get("div").contains("Your score");
  });
});
