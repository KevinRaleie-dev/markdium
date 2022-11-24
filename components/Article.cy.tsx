import { Article } from "./Article";

describe('<Article>', () => {
    it("should mount", () => {
        const content = ""
        cy.mount(<Article content={content}/>)
    })

    it("should test if an h1 tag with text `Heading 1` exists", () => {
        const content = "# Heading 1"
        cy.mount(<Article content={content} />)

        cy.get("[data-cy=article-preview]").should("contain.html", "h1").should("contain.text", "Heading 1")
    })

    it("should test if a list item exists", () => {
        const content = "- task 1"
        cy.mount(<Article content={content} />)

        cy.get("[data-cy=article-preview]").should("contain.html", "li").should("contain.text", "task 1")
    })

    it("should test if a paragraph tag exists", () => {
        const content = "I am a paragraph"
        cy.mount(<Article content={content} />)

        cy.get("[data-cy=article-preview]").should("contain.html", "p").should("contain.text", "I am a paragraph")
    })
})