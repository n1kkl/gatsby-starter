import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `My Blog`,
        siteUrl: `https://www.yourdomain.tld`
    },
    graphqlTypegen: true,
    plugins: ['gatsby-plugin-sass', 'gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
        resolve: 'gatsby-source-filesystem',
        options: {
            'name': 'images',
            'path': './src/images/'
        },
        __key: 'images'
    }, {
        resolve: 'gatsby-plugin-apollo',
        options: {
            uri: 'http://localhost:4000/graphql'
        }
    }]
};

export default config;
