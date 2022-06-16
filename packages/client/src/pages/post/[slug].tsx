import * as React from "react"
import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react";
import {Post} from "../../types";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {Helmet} from "react-helmet";

interface PostPageProps {
    params: {
        slug: string;
    }
}

const GET_POST = gql`
    query Posts($slug: ID!) {
        post(id: $slug) {
            title
            slug
            content
            author {
                firstname
                surname
            }
            comments {
                author {
                    firstname
                    surname
                }
                content
                createdAt
            }
            createdAt
        }
    }
`

const PostPage = ({params}: PostPageProps) => {
    const {data, loading, error} = useQuery<{ post: Post }>(GET_POST, {
        variables: {
            slug: params.slug
        }
    });

    useEffect(() => {
        console.log(data?.post?.title)
    }, [data]);

    return (
        <main className="h-full bg-gray-50 p-5">
            <Helmet>
                <title>{!!data ? data.post.title : 'Post'} - My Blog</title>
                <meta name="description" content={!!data ? data.post.content.substring(0, 255) : 'Content'}/>
            </Helmet>
            {!!data?.post ?
                <div className="w-full max-w-2xl mx-auto">
                    <div>
                        <Link to="/" className="text-blue-400">&lt; Back</Link>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-black">{data.post.title}</h1>
                        <small>
                            {new Date(data.post.createdAt).toDateString()}, {data.post.author.firstname} {data.post.author.surname}
                        </small>
                    </div>
                    <hr className="my-5"/>
                    <div>
                        {data.post.content.split('\r\n').map(paragraph => (
                            <p className="mb-3">{paragraph}</p>
                        ))}
                    </div>
                    <hr className="my-5"/>
                    {data.post.comments?.map(comment => (
                        <div key={comment.id} className="mb-3">
                            <strong>{comment.author.firstname} {comment.author.surname}</strong>
                            <small className="text-gray-400"> on {new Date(comment.createdAt).toDateString()}</small>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
                :
                null
            }
        </main>
    )
}

export default PostPage
