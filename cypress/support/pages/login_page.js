/// <reference types="cypress" />

export default{
    clicarLogin() {
        cy.get('#btnLogin')
            .click()

    },

    //validarMensagemDeErro() {
       // cy.get('.invalid_input')
           // .then((element) => {
               // expect(element).to.be.visible
               // expect(element.text()).eq('E-mail inválido.')

           // })
    //},

    validarMensagemDeErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text',mensagem )
    },

    preencheEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)

    },

    validarMensagemDeSucesso() {
        cy.get('.swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
        .should('have.text', 'Olá, francielezwirtes@gmail.com')

    }    

}
