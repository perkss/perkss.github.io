import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const financial = {

    title: 'Financial',
    text: <div>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to={"#Introduction"}>Introduction</Link></li>
            <li><Link to={"#Derivatives"}>Derivatives</Link></li>
            <li><Link to={"#Interest"}>Interest Rates</Link></li>
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

        <h3 id={"Interest"}>Interest Rates</h3>
              <p>an interest rate defines the amount of money a borrower promises to pay the lender</p>

              <p>Factor is credit risk of borrower the worse the borrower the higher the rate the extra amount for credit risk is added and known as the credit spread
</p>

              <p>Interest rate often written in basis points where one basis point is 0.01%
</p>

              <h4>Treasury Rates</h4>
              <p>the rate an investor earns on treasury bills and treasury bonds
Instruments used by governments to borrow in own currency
Assumed that no worries on default for developed countries
Regarded as risk free
              </p>

              <h4>Overnight Rates</h4>

              <p>banks are required to maintain a certain amount of cash known as reserve with central bank
At the end of the day some financial institutions have surplus funds and others require more leading to borrowing and lending overnight. In US central bank is fed and is used for the broker and this is called federal funds rate.
In uk the rate is called SONIA
Euro is ESTER</p>

              <h4>Risk Free Rate</h4>
              <p>usual approach for pricing derivatives is setting up a portfolio that is risk less and arguing the return on the portfolio is the risk free rate.
The risk free reference rate used is not from treasury due to tax and regulatory factors leading rates to be artificially low. Risk free reference rates are used instead.
</p>


              <h4>Repo Rates</h4>
              <p>secured borrowing rates in a repurchase agreement, financial institutions are obtaining a loan and the interest it pays is the difference between the price at which the security is sold and the price it is repurchased. The interest rate here is also known as repo rate.
This works by the lender buying securities from a borrower with the agreement they buy them back at a higher price. This gives protection as if the borrower defaults the lender keeps the securities.
SOFR is a volume weighted average median of the rates on overnight repo transactions in the USA. This is overnight lending.
Most common type is overnight repo, but also longer term known as term repos are used.
</p>
<h4>Reference Rates</h4>
              <p>usual approach for pricing derivatives is setting up a portfolio that is risk less and arguing the return on the portfolio is the risk free rate.
The risk free reference rate used is not from treasury due to tax and regulatory factors leading rates to be artificially low. Risk free reference rates are used instead.
</p>

              <h4>Measuring Interest Rates</h4>

              <p>A simple way to measure interest rates is if the rate is 10% and paid annually it is <InlineMath math="\$100 \times 1.1 = 110"/>. If the rate is 10% and paid semi annually so 5% every six months then <InlineMath math="\$100 \times 1.05 \times 1.05 = \$110.25"/></p>
        <h2 id={"PricingBonds"}>Pricing Bonds</h2>
              <p></p>

              <p></p>

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
