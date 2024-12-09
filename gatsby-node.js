const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      projects: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }

      policies: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "policy" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }

      contents: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "content" } } }
      ) {
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

  // Create projects pages
  const projects = result.data.projects.nodes
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

  // Create policy articles
  const policies = result.data.policies.nodes
  const policyTemplate = path.resolve(`./src/templates/policy-detail.js`)
  policies.forEach(node => {
    createPage({
      path: `/policy/${node.frontmatter.slug}`,
      component: policyTemplate,
      context: {
        id: node.id,
      },
    })
  })

  // Create content pages
  const contents = result.data.contents.nodes
  const contentTemplate = path.resolve(`./src/templates/content-page.js`)
  contents.forEach(node => {
    createPage({
      path: `/${node.frontmatter.slug}`,
      component: contentTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
