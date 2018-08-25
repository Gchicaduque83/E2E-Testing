describe('Los estudiantes, login', function() {
    it('Creación de cuenta nueva', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Germán Andrés")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Chica Duque")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("chicaduque@hotmail.com")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-de-los-andes')
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("80100609")
        cy.get('.cajaSignUp').contains('Registrarse').click()
    })

     it('Login exitoso con cuenta nueva', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("chicaduque@hotmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("80100609")
      cy.get('.cajaLogIn').contains('Ingresar').click()
    })

    it('Creación de cuenta ya existente', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click() 
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Germán Andrés")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Chica Duque")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ga.chica10@uniandes.edu.co")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-de-los-andes')
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("80100609")
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Ok').click()
    })
	
})

