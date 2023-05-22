describe("Check currensy changer for charts", () => {
  it("Should check data in currency-container an there 2 charts on page", () => {
    cy.visit("/timeline");
    cy.viewport(1920, 1080);
    cy.get("main select").select("ETH");
    cy.get("#currency-id span").should("have.text", "Ethereum");

    cy.get("main select").select("BTC");
    cy.get("#currency-id span").should("have.text", "Bitcoin");

    cy.get("canvas").should("have.length", 2);
    console.log(cy.get("canvas").first());
  });
});
