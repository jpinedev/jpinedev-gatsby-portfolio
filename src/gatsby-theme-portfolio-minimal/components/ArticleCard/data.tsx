import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ArticlePreviewData {
    id: string;
    slug: string;
    title: string;
    description: string | null;
    date: string;
    banner: {
        alt: string | null;
        caption: string | null;
        src: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        } | null;
    };
    categories: string[];
    keywords: string[] | null;
    readingTime: {
        text: string;
    };
    body: string;
}

// Since we use the query in gatsby-node files we have to store it
// in a separate JavaScript file - otherwise we run into errors
// due to missing transpilation
export const ArticlePreviewQuery = `
    query ArticleTemplateQuery {
      allArticle(sort: {fields: date, order: DESC}) {
        articles: nodes {
          banner {
            alt
            caption
            src {
              childImageSharp {
                gatsbyImageData(width: 660, height: 400, placeholder: TRACED_SVG)
              }
            }
          }
          body
          categories
          date(formatString: "MMMM DD, YYYY")
          description
          id
          keywords
          slug
          title
          readingTime {
            text
          }
        }
      }
    }  
  `;
