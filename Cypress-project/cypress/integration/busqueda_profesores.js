describe('Los estudiantes, busqueda de profesores', function() {
    it('Busqueda de profesor', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.logo.uniandes').click()
        cy.get('.opcion_maestria_click').click()
        cy.get('select.form-control').select('Maestría en Ingeniería de Software')
        cy.get('.opcion_maestria_click').click()
    })
})

