describe("Check theme", () => {
  it("Should check theme changer", () => {
    cy.visit("/");
    cy.get("header label").click();
    cy.get("#root div")
      .first()
      .should("have.css", "background-color", `rgba(196, 196, 196, 0.32)`)
      .should("have.css", "color", `rgb(0, 0, 0)`);
    cy.get("#card-usd")
      .should("have.css", "background-color", `rgb(216, 216, 229)`)
      .should("have.css", "color", `rgb(0, 0, 0)`);

    cy.get("header label").click();
    cy.get("#root div")
      .first()
      .should("have.css", "background-color", `rgb(0, 0, 0)`)
      .should("have.css", "color", `rgb(255, 255, 255)`);
    cy.get("#card-usd")
      .should("have.css", "background-color", `rgb(32, 32, 37)`)
      .should("have.css", "color", `rgb(255, 255, 255)`);
  });
});
