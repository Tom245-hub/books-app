describe("Autor", () => {
    it"dodawanie nowego autora", () => {
        cy.visit("/authors");
        cy.contains("a", "Dodaj autora").click({force:true});
    }
})