import React from "react";
import BlogPage from './blog-page.js';
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
        </ul>

        <h3 id={"Introduction"}>Introduction</h3>

        <p>Green computing, or sustainable computing, is the practice of maximizing energy efficiency and minimizing environmental impact in the ways computer chips, systems and software are designed and used. <a href="https://blogs.nvidia.com/blog/2022/10/12/what-is-green-computing/">(Nvidia)</a>. This area of technology is still in its infancy but <a href="https://www.gartner.com/en/newsroom/press-releases/2022-04-21-gartner-says-three-emerging-environmental-sustainability-technologies-will-see-early-mainstream-adoption-by-2025">Gartner</a> states that cloud sustainability, carbon footprint measurement and advanced grid management software are going to be the first three mainstream sustainable technology themes.</p>

        <h3 id={"SharedResponsibility"}>Shared Responsibility</h3>

        <p>Everyone has a part to play in the climate solution and this includes software engineers. AWS has a great visual and write up on the fact that they provide a <a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/the-shared-responsibility-model.html">responsible platform</a> but it is up to the engineers using it to make the most of its features and use it responsibly by using the best cloud techniques.</p>

        <p>This is not only applicable to public cloud usage but also private cloud and on premise infrastructure. Open source projects should also be considering this aspect.</p>

        <p>Therefore it is key for all engineers to consider the implications of their design decisions on the climate crisis.</p>

        <h3 id={"MeasuringGreenSoftware"}>Measuring Green Software</h3>

        <p>When looking at the climate impact of software on the planet the main question is how do we measure our software. Luckily the Green Software foundation are making strides to standardise a formula. <a href="https://sci-guide.greensoftware.foundation/">Software Carbon Intensity (SCI)</a> is a straightforward formula for calculating the carbon intensity of an application.</p>

        <p>This formulate is straightforward to understand but the difficult part is getting the variables to plugin into the formula of (E * I) + M per R.</p>

        <p>E = Energy consumption (kilowatt hours) for different components of the software boundary.</p>
        <p>I = Emission factors these are the emissions from the power sources used for powering the infrastructure running your software. When you use power from a GRID it is a mixture from different sources such as solar, wind, coal and nuclear. Each of these different sources have different impacts on the planet and can change at different times of day. Therefore your power carbon intensity changes depending on location and time.</p>
        <p>M = embodied emissions for servers, laptops, mobile phones.</p>

        <p>Luckily things are getting easier to find out for example M if you are running servers most manufacturers are now providing emission data on the creation, lifetime and recycling emissions of a server for example here is a specification from <a href="https://i.dell.com/sites/content/corporate/corp-comm/en/documents/dell-server-carbon-footprint-whitepaper.pdf">DELL</a>.</p>

        <p>I (Emissions Factors) is now also straightforward and well documented if you are running services in a location that has data available on the power mix you can get data from Electricity Maps or WattTime for example that will provide the data required.</p>

        <p>E (Energy Consumption) is the more difficult metric to obtain as a software engineer. In the world of the cloud in particular you are abstracted away from the machines you run on if you are using containers or virtual machines which you should be. To overcome this a utilization approach is a good first step where you can infer the power usage from utilization when using shared infrastructure such as multiple processes on a virtual machine. You can divided out the energy used for the total VM by the utilization of each process.</p>

        <p>Moving away from specific formulas and looking at the public cloud all the hyperscale cloud providers provide emissions data for your cloud workload. At this time it is not granular enough for specific processes but is a good starting point to calculate the emissions of your software and get proxy values for the SCI formula.</p>

        <h3 id={"EfficientProgramming"}>Efficient Programming</h3>

        <p>Efficient Programming languages is the most controversial part of the Green Computing and always gets a mention due to the popularity of a post by AWS on Rust please take a <a href="https://aws.amazon.com/blogs/opensource/sustainability-with-rust/">here.</a>
            I am intending to do some of my own benchmarks on this to form my own opinion on the results. The results do make sense but its a small test case. I would always urge the answer to be the right tool for the job. You also need to consider the build times and tooling overheads of different programming language choices.</p>

        <p>Green Computing is not about small micro optimizations but following the best practices. Language engineers can take the issue of inefficient languages away from you such as Python library NumPy is written mainly in <a href="https://numpy.org/doc/stable/user/building.html">C</a> for performance reasons.</p>

        <p>Java has Just in Time (JIT) <a href="https://www.ibm.com/docs/en/sdk-java-technology/8?topic=reference-jit-compiler">compilation</a> that improves performance for Java projects without application developers having to do anything special.</p>

        <p>Therefore from the view point of sustainable software you still should choose the right language for the job and not consider changing languages as you think an alternative might be more efficient.</p>

        <h3 id={"EfficientArch"}>Efficient Architecture</h3>

        <p>All of the hyper scale cloud providers now have strategies for well architected systems for the cloud.</p>

        <p>AWS has the <a href="https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc&wa-guidance-whitepapers.sort-by=item.additionalFields.sortDate&wa-guidance-whitepapers.sort-order=desc">Well Architected Framework</a>
        which has the sixth pillar as <a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html">Sustainability</a> showing the importance and maturity of the topic of Green Computing. This is great to see as the pillar will be viewed as a standard step to well designed cloud software.</p>

        <p>Azure provides multiple different sustainable sections <a href="https://learn.microsoft.com/en-us/azure/well-architected/sustainability/">such as the sustainability pillar</a> to read but a highlight is the <a href="https://learn.microsoft.com/en-us/azure/aks/concepts-sustainable-software-engineering">Sustainable software engineering practices in Azure Kubernetes Service (AKS)</a>
            which provides the detail required for software engineers to apply sustainable techniques to their software.</p>

        <p>GCP has details on <a href="https://cloud.google.com/sustainability">Sustainability</a> in the cloud.</p>

        <h3 id={"Tools"}>Tools</h3>

        <p>The Green Software Foundation is now building tooling to help measure software for example the <a href="https://github.com/Green-Software-Foundation/if">Impact Framework</a>.
            This is a tool for providing the ability to calculate different environmental metrics such as the SCI easily for all engineers.
        </p>

        <p><a href="https://www.cloudcarbonfootprint.org/docs/">Cloud Carbon Footprint</a> tool is a great example of how you can visually present your carbon footprint by ThoughtWorks.
            The tool shows examples of how to make carbon metrics relatable such as stating the amount of software as number of transatlantic flights.</p>

        <p></p>

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
