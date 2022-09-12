import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface ArticlePreviewData {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  date: string;
  thumbnail: {
      alt: string | null;
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

interface ArticlePreviewQueryResult {
  allArticle : {
    articles: ArticlePreviewData[];
  }
}

export const useLocalDataSource = (): ArticlePreviewQueryResult => {
  return useStaticQuery(graphql`
    query ArticleTemplateQuery {
      allArticle(sort: {fields: date, order: DESC}) {
        articles: nodes {
          banner {
            alt
            src {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
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
  `);
};