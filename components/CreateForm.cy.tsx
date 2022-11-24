import { CreateForm } from "./CreateForm"


describe('<CreateForm>', () => {
    it("should mount", () => {
        cy.mount(<CreateForm />)
    })

    it("should type in the inputs and publish", () => {
        cy.mount(<CreateForm />)

        cy.get("[data-cy=input-title]").type("Testing testing")
        cy.get("[data-cy=input-content]").type("# Testing testing")
        cy.get("[data-cy=publish]").click()

    })
})