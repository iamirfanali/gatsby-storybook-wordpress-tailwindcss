import { graphql, PageProps } from "gatsby"
import { getImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

import Case, { Tabs } from "@components/Organisms/Case"

import { Query } from "../generated/graphql-types"

const IndexPage: React.FC<
  PageProps<Pick<Query, "allWpPage" | "allWpCase">>
> = ({ data }) => {
  const caseSection = data.allWpPage.nodes[0].pageSections?.section?.[0]
  const tabsData = data.allWpCase.nodes

  const tabs = tabsData.map(tab => ({
    label: tab.title,
    subTitle: tab.subTitle?.label,
    summary: tab.summary?.summary,
    cta: tab.callToActions?.cta,
    icon: getImage(tab.icon?.icon?.localFile?.childImageSharp?.gatsbyImageData),
    image: getImage(
      tab.featuredImage?.node.localFile?.childImageSharp?.gatsbyImageData
    ),
    altText: tab.featuredImage?.node.title,
  })) as unknown as Tabs[]

  return (
    <div className="my-10">
      <Case
        title={caseSection?.title ?? ""}
        subTitle={{
          label: caseSection?.subtitle?.label ?? "",
          icon: {
            image: getImage(
              caseSection?.subtitle?.icon?.localFile?.childImageSharp
                ?.gatsbyImageData
            ) as IGatsbyImageData,
            alt: caseSection?.subtitle?.icon?.title ?? "",
          },
        }}
        tabs={tabs}
      />
    </div>
  )
}

export const PageQuery = graphql`
  query HomePageQuery {
    allWpPage(filter: { title: { eq: "Home Page" } }) {
      nodes {
        pageSections {
          section {
            ...PageSectionsFragment
          }
        }
      }
    }
    allWpCase(sort: { orderNumber: { order: ASC } }) {
      nodes {
        title
        subTitle {
          label
        }
        summary {
          summary
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: BLURRED)
              }
            }
            title
          }
        }
        icon {
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 35, quality: 100, placeholder: BLURRED)
              }
            }
            title
          }
        }
        callToActions {
          cta {
            ...CtaFragment
          }
        }
      }
    }
  }

  fragment PageSectionsFragment on WpPage_Pagesections_Section_AddSection {
    title
    subtitle {
      label
      icon {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 40, placeholder: BLURRED)
          }
        }
        title
      }
    }
  }

  fragment CtaFragment on WpCase_Calltoactions_Cta_AddCta {
    href
    label
    variant
  }
`

export default IndexPage
