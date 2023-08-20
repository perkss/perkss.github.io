import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/hljs';
import { HashLink as Link } from 'react-router-hash-link';


const green = {

    title: 'Green Computing',
    text: <div>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to={"#Introduction"}>Introduction</Link></li>
            <li><Link to={"#SharedResponsibility"}>Shared Responsibility</Link></li>
            <li><Link to={"#MeasuringGreenSoftware"}>Measuring Green Software</Link></li>
            <li><Link to={"#EfficientProgramming"}>Efficient Programming</Link></li>
            <li><Link to={"#EfficientArch"}>Efficient Architecture</Link></li>
            <li><Link to={"#Tools"}>Tools</Link></li>
            <li><Link to={"#Hardware"}>Hardware</Link></li>
        </ul>

        <h3 id={"Introduction"}>Introduction</h3>

        <p>Green computing, or sustainable computing, is the practice of maximizing energy efficiency and minimizing environmental impact in the ways computer chips, systems and software are designed and used. <a href="https://blogs.nvidia.com/blog/2022/10/12/what-is-green-computing/">(Nvidia)</a>. This area of technology is still in its infancy but <a href="https://www.gartner.com/en/newsroom/press-releases/2022-04-21-gartner-says-three-emerging-environmental-sustainability-technologies-will-see-early-mainstream-adoption-by-2025">Gartner</a> states that cloud sustainability, carbon footprint measurement and advanced grid management software are going to be the first three mainstream sustainble technology themes.</p>

        <h3 id={"SharedResponsibility"}>Shared Responsibility</h3>

        <p>Everyone has a part to play in the climate solution and this includes software engineers. AWS has a great visual and write up on the fact that they provide a <a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/the-shared-responsibility-model.html">responsible platform</a> but it is update to the engineers using it to make the most of its features and use it resposibly by using the best cloud techniques.</p>

        <p>This is not only applicable to public cloud usage but also private cloud and on premise infrastructure. Open source projects should also be considering this aspect.</p>

        <p>Therefore it is key for all engineers to consider the implications of their design decisions on the climate crisis.</p>

        <h3 id={"MeasuringGreenSoftware"}>Measuring Green Software</h3>

        <p>When looking at the climate impact of software on the planet the main question is how do we measure our software. Luckily the Green Software foundation are making strides to standardise a formula. <a href="https://sci-guide.greensoftware.foundation/">Software Carbon Intensity (SCI)</a> is a straightforward forumla for calculating the carbon intensity of an application.</p>

        <p>This formulate is straightforward to understand but the difficult part is getting the variables to plugin into the formula of (E * I) + M per R.</p>

        <p>E = Energy consumption (kilowatt hours) for different components of the software boundary.</p>
        <p>I = Emission factors these are the emissions from the power sources used for powering the infrastructure running your software. When you use power from a GRID it is a mixture from different sources such as solar, wind, coal and nuclear. Each of these different sources have different impacts on the planet and can change at different times of day. Therefore your power carbon intensity changes depending on location and time.</p>
        <p>M = embodied emissions for servers, laptops, mobile phones.</p>

        <p>Luckily things are getting easier to find out for example M if you are running servers most manufacturers are now providing emission data on the creation, lifetime and recyling emissions of a server for example here is a specification from <a href="https://i.dell.com/sites/content/corporate/corp-comm/en/documents/dell-server-carbon-footprint-whitepaper.pdf">DELL</a>.</p>

        <p>I (Emissions Factors) is now also straightforward and well documented if you are running services in a location that has data available on the power mix you can get data from Electricity Maps or WattTime for example that will provide the data required.</p>

        <p>E (Energy Consumption) is the more difficult metric to obtain as a software engineer. In the world of the cloud in partuclar you are abstracted away from the machines you run on if you are using containers or virtual machines which you should be. To overcome this a utilization approach is a good first step where you can infer the power usage from utilization when using shared infrastructure such as multiple processes on a virtual machine. You can divided out the energy used for the total VM by the utilization of each process.</p>
        <p></p>
        <p></p>

        <h3 id={"EfficientProgramming"}>Efficient Programming</h3>

        <p>This is the most controversial part of the Green Computing and always gets a mention due to the popularity of a post by AWS on Rust please take a <a href="https://aws.amazon.com/blogs/opensource/sustainability-with-rust/">here.</a> I am intending to do some of my own benchmarks on this to form my own opinion on the results. The results do make sense but its a small test case. I would always urge the answer to be the right tool for the job. You also need to consider the build times and tooling overheads of different programming languaged choices.</p>


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
