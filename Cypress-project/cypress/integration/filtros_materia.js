describe('Los estudiantes, filtros por materia', function() {
    it('Ir página de profesor', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.logo.uniandes').click()
        cy.get('.opcion_maestria_click').click()
        cy.get('select.form-control').select('Maestría en Ingeniería de Software')
        cy.contains('Mario Linares Vasquez').click()
        cy.get('.Select-input').click().type('pruebas automaticas{enter}')
    })
})

//find('input[role="combobox"]').