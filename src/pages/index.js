import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Gatsby on WP Engine" />
        {/* <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3 dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div> */}

        {/* <h1>Posts</h1> */}
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link
              to={node.slug}
              style={{
                color: `rebeccapurple`,
                textDecoration: `none`,
              }}
            >
              <h2>{node.title}</h2>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
