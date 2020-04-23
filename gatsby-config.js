module.exports = {
  siteMetadata: {
    title: 'Saniya Nafees | Software Developer',
    author: 'Saniya Nafees',
    description: 'Personal Portfolio Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#b86b77',
        theme_color: '#b86b77',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
