import * as React from "react"
import {Link} from "gatsby";

const NotFoundPage = () => {
    return (
        <main className="h-full w-full bg-gray-50 p-5 flex">
            <div className="m-auto">
                <div>
                    <h1 className="text-center text-4xl font-black mb-2">Lost your way?</h1>
                    <p>Sorry, we can't find that page. You'll find loads to explore on the <Link className="text-blue-400 underline" to="/">home page</Link>.</p>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage
