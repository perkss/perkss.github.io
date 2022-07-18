import React from 'react';
import BlogPage from "../blog-page";

const algorithms = {
    title: 'Intractable Algorithms',
    contents:
        '',
    text: [
        <div>

        </div>
    ]
}

const Intractable = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Intractable;