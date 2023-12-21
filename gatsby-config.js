/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby, Wordpress, Storybook & TailwindCSS`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        aliases: {
          "@components": "src/components",
          "@icons": "src/icons",
          "@utils": "src/utils",
          "@hooks": "src/hooks",
        },
        extensions: ["js", "ts", "tsx"],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
              ],
            },
          ],
        },
        formats: [`woff2`, `woff`],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WORDPRESS_URL,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-wordpress-storybook-tailwindcss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
