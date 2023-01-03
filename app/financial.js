import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';


const financial = {

    title: 'Financial',
    text: <div>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to={"#Introduction"}>Introduction</Link></li>
            <li><Link to={"#Derivatives"}>Derivatives</Link></li>
            <li><Link to={"#Interest"}>Interest</Link></li>
            <li><Link to={"#PricingBonds"}>Pricing Bonds</Link></li>
            <li><Link to={"#FutureForward"}>Pricing Futures and Forwards</Link></li>
            <li><Link to={"#IRFuture"}>Interest Rate Futures</Link></li>
            <li><Link to={"#Swaps"}>Swaps</Link></li>
            <li><Link to={"#Options"}>Options</Link></li>
            <li><Link to={"#Greeks"}>The Greeks</Link></li>
            <li><Link to={"#Risk"}>Risk</Link></li>
        </ul>

        <h3 id={"Introduction"}>Introduction</h3>

        <h3 id={"Derivatives"}>Derivatives</h3>

        <h3 id={"Interest"}>Interest</h3>


        <h2 id={"PricingBonds"}>Pricing Bonds</h2>


        <h2 id={"FutureForward"}>Pricing Futures and Forwards</h2>


        <h2 id={"IRFuture"}>Interest Rate Futures</h2>


        <h2 id={"Swaps"}>Swaps</h2>


        <h2 id={"Greeks"}>The Greeks</h2>
        <h2 id={"Risk"}>Risk</h2>


    </div>,
    contents: ''

};


const financePage = () => {

    return (

        <BlogPage
            title={financial.title}
            contents={financial.contents}
            text={financial.text}
        />
    );

}

export default financePage;
