<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Headless WordPress using Gatsby running on WP Engine

This is a demo site that connects to a WordPress instance on WP Engine.

## Want to try it on your site?

Clone this repo and change the `gatsby-config.js` to point to your WordPress instance:

```
{
  resolve: `gatsby-source-wordpress`,
  options: {
    // change to your site
    baseUrl: `headlesswpe.wpengine.com`,
    protocol: `https`,
    hostingWPCOM: false,
    // does your site use the Advanced Custom Fields Plugin?
    useACF: false,
  },
},
```
