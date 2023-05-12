describe("Check header children", () => {
  it("Should count header children '/'", () => {
    cy.visit("/");

    cy.get("header").children().should("have.length", 3);
  });
});

describe("Check nav children", () => {
  it("Should count nav children '/'", () => {
    cy.visit("/");

    cy.get("nav").children().should("have.length", 4);
  });
});

describe("Open modal usd and check 2 usd to btc", () => {
  it("Should open modal usd and check 2 usd to btc '/'", () => {
    cy.request({
      method: "GET",
      url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
    }).then((resp) => {
      let response = resp;
      let res =
        "" + ((1 / response.body.usd["usd"]) * (1 * 0.000036) * 2).toFixed(9);
      //use response.body.usd["btc"] instade 0.000036 for none cashed data
      cy.visit("/");
      cy.viewport(1920, 1080);
      cy.get("#card-usd").click();
      cy.get("#modal-container input").type("{backspace}2");
      cy.get("#modal-container select").select("btc");
      cy.get("#conv-res").should("have.text", res);
    });
  });
});

describe("Open modal usd and check string in amount input", () => {
  it("Should return NaN", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.get("#card-usd").click();
    cy.get("#modal-container input").type("{backspace}somedata");
    cy.get("#modal-container select").select("btc");
    cy.get("#conv-res").should("have.text", "NaN");
  });
});

describe("Open modal usd and check empty string in amount input", () => {
  it("Should return 0.000000000", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.get("#card-usd").click();
    cy.get("#modal-container input").type("{backspace}");
    cy.get("#modal-container select").select("btc");
    cy.get("#conv-res").should("have.text", "0.000000000");
  });
});

describe("Open modal btc and check 2 btc to usd", () => {
  it("Should modal usd and check 2 usd to btc '/'", () => {
    cy.request({
      method: "GET",
      url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
    }).then((resp) => {
      let response = resp;
      let res = "" + ((1 / 0.000036) * response.body.usd["usd"] * 2).toFixed(9);
      //use response.body.usd["btc"] instade 0.000036 for none cashed data
      cy.visit("/");
      cy.viewport(1920, 1080);
      cy.get("#card-btc").click();
      cy.get("#modal-container input").type("{backspace}2");
      cy.get("#modal-container select").select("usd");
      cy.get("#conv-res").should("have.text", res);
    });
  });
});
