const {ApolloServer, gql} = require('apollo-server');
const {LoremIpsum} = require("lorem-ipsum");
const loremPicsum = require("lorem-picsum");
const casual = require("casual");

const typeDefs = gql`
    type Post {
        id: ID!
        image: String
        title: String!
        slug: String!
        content: String!
        author: User!
        comments: [Comment!]
        createdAt: String!
        updatedAt: String!
    }

    type User {
        id: ID!
        firstname: String!
        surname: String!
        createdAt: String!
        updatedAt: String!
    }

    type Comment {
        id: ID!
        content: String!
        author: User!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        posts: [Post!]
        users: [User!]
        comments: [Comment!]
        post(id: ID!): Post
        postBySlug(slug: String!): Post
        user(id: ID!): User
        comment(id: ID!): Comment
    }
`;


const lorem = new LoremIpsum();

const mocks = {
    Post: () => ({
        image: () => loremPicsum({width: 1920, height: 1080}),
        title: () => casual.title,
        slug: () => casual.title.replaceAll(' ', '-').toLowerCase(),
        content: () => lorem.generateParagraphs(3),
        createdAt: () => new Date().toISOString(),
        updatedAt: () => new Date().toISOString()
    }),
    User: () => ({
        firstname: () => casual.first_name,
        surname: () => casual.last_name,
        createdAt: () => new Date().toISOString(),
        updatedAt: () => new Date().toISOString()
    }),
    Comment: () => ({
        content: () => casual.sentences(3),
        createdAt: () => new Date().toISOString(),
        updatedAt: () => new Date().toISOString()
    }),
};

const server = new ApolloServer({
    typeDefs,
    mocks,
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`)
});