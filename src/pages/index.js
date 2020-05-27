import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout_1"

const Index = ({ data }) => {
  return (
    <Layout>
      {data.site.siteMetadata.siteTitle}
      <ul>
        {data.articles.nodes.map(article => (
          <li>
            <Link to={article.elements.slug,value}>{article.element.title.value}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle
      }
    }
    articles: allKontentItemArticle {
      nodes {
        elements {
          title {
            value
          }
          slug {
            value
          }
        }
      }
    }
  }
`
