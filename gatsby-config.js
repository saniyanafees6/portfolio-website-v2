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
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyB7cHAvspgp0mZnSHdN-lTHFAuLer4SvZ0',
          authDomain: 'portfoliowebsite-e7dcf.firebaseapp.com',
          databaseURL: 'https://portfoliowebsite-e7dcf.firebaseio.com',
          projectId: 'portfoliowebsite-e7dcf',
          storageBucket: 'portfoliowebsite-e7dcf.appspot.com',
          messagingSenderId: '236151781766',
          appId: '1:236151781766:web:f3000b4a29aa1603e1d407',
          measurementId: 'G-EN6MS4371Z',
        },
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}

// var firebaseConfig =
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)
// firebase.analytics()
