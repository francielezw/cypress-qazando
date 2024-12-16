/// <reference types="cypress" />

import commum_login_page from '../support/pages/commum_login_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach('Acessar tela de Login', () => {
        commum_login_page.acessarLogin()

 })
    it('Campo e-mail vazio' , () => {
        login_page.clicarLogin()
        login_page.validarMensagemDeErro('E-mail inválido.')

    })
     it('Campo senha vazia', () => {
        login_page.preencheEmail('francielezwirtes@gmail.com')
        login_page.clicarLogin()
        login_page.validarMensagemDeErro('Senha inválida.')
    })
     it('Campo e-mail inválido', () => {
        login_page.preencheEmail('francielezwirtes.com')
        login_page.preencheSenha('123456')
        login_page.clicarLogin()
        login_page.validarMensagemDeErro('E-mail inválido.')
    })

    it('Campo senha inválida', () => {
        login_page.preencheEmail('francielezwirtes@gmail.com')
        login_page.preencheSenha('124')
        login_page.clicarLogin()
        login_page.validarMensagemDeErro('Senha inválida.')

    })

    it('Login com sucesso' , () => {
        login_page.preencheEmail('francielezwirtes@gmail.com')
        login_page.preencheSenha('12456789')
        login_page.clicarLogin()
        login_page.validarMensagemDeSucesso('Login realizado', 'Olá, francielezwirtes@gmail.com')

     })



})

   

