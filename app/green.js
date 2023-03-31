import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';


const green  = {

    title: 'Green Computing',
    text: <div>

    <h3>Topics</h3>
    <ul className="text-list">
    <li><Link to={"#Introduction"}>Introduction</Link></li>
    <li><Link to={"#MeasuringGreenSoftware"}>Measuring Green Software</Link></li>
    <li><Link to={"#EfficientProgramming"}>Efficient Programming</Link></li>
    <li><Link to={"#EfficientArch"}>Efficient Architecture</Link></li>
    <li><Link to={"#Tools"}>Tools</Link></li>
    <li><Link to={"#Hardware"}>Hardware</Link></li>
    </ul>

    <h3 id={"Introduction"}>Introduction</h3>

    <p>Green computing, or sustainable computing, is the practice of maximizing energy efficiency and minimizing environmental impact in the ways computer chips, systems and software are designed and used. <a href="https://blogs.nvidia.com/blog/2022/10/12/what-is-green-computing/">(Nvidia)</a>. This area of technology is still in its infancy but <a href="">Gartner</a> states that cloud sustainability, carbon footprint measurement and advanced grid management software are going to be the first three mainstream sustainble technology themes.</p>

    <h3 id={"MeasuringGreenSoftware"}>Measuring Green Software</h3>
    <h3 id={"EfficientProgramming"}>Efficient Programming</h3>



    <h2 id={"EfficientArch"}>Efficient Architecture</h2>


    <h2 id={"Tools"}>Tools</h2>


    <h2 id={"Hardware"}>Hardware</h2>

    </div>,
    contents: ''

};


const GreenPage = () => {
    return (

        <BlogPage
        title={green.title}
        contents={green.contents}
        text={green.text}
        />
    );

}

export default GreenPage;
