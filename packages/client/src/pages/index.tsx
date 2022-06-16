import * as React from "react"
import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react";
import {Post} from "../types";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import { Helmet } from "react-helmet";

const GET_POSTS = gql`
    query Posts {
        posts {
            id
            title
            slug
            content
            author {
                firstname
                surname
            }
            createdAt
        }
    }
`

const IndexPage = () => {
    const {data, loading, error} = useQuery<{ posts: Post[] }>(GET_POSTS);

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <main className="h-full bg-gray-50 p-5">
            <Helmet>
                <title>My Blog - Posts</title>
            </Helmet>
            <div className="w-full max-w-2xl mx-auto">
                <div className="text-center">
                    <h1 className="text-center text-3xl font-black">My Blog</h1>
                </div>
                <hr className="my-5"/>
                {data && data.posts.map((post) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="bg-white rounded mb-5 p-5 shadow-sm flex flex-col">
                        <div className="font-bold text-xl mb-3">
                            {post.title}
                        </div>
                        <div className="mb-2">
                            {post.content.substring(0, 255)}...
                        </div>
                        <small className="text-gray-400 ml-auto">
                            {new Date(post.createdAt).toDateString()}, {post.author.firstname} {post.author.surname}
                        </small>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default IndexPage
