const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const projects = result.data.allMarkdownRemark.nodes
  const projectTemplate = path.resolve(`./src/templates/project-detail.js`)

  projects.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
