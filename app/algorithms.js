import React, { Component } from "react";
import BlogPage from './blog-page.js';
  

const algorithms = {
    title: 'Algorithms',
  contents:
    '',
    text: [
<div>
            <p>Hurry up Perks and get this done the suspense is killing me! </p>

            <h3>Introduction</h3>
            <h4>Algorithmic Thinking</h4>
            <h4>Models of Computation</h4>
           
            <h3>Selections</h3>
            <h4>Hoare QuickSelect</h4>
            <h3>Sorting and Trees</h3>
             <h4>Insertion Sort</h4>
            <h4>Merge Sort</h4>
             <h4>Heaps and Heap Sort</h4>
            <h4>Binary Search Tree</h4>
             <h4>AVL Trees and Sort</h4>
            <h4>Counting Sort</h4>
             <h4>Radix Sort</h4>
            <h4>Lower Bounds</h4>
            <h3>Hashing</h3>
             <h4>Hashing with Chaining</h4>
            <h4>Table Doubling</h4>
             <h4>Open Addressing</h4>

            <h3>Numerics</h3>
            <h4>Integer Arithmetic</h4>
                        <h4>Square Roots</h4>
            <h3>Graphs</h3>
                      <h4>Breadth First Search</h4>
                        <h4>Depth First Search</h4>
            <h3>Shortest Paths</h3>
            <h4>Single Source Shortest Problem</h4>
            <h4>Dijkstra</h4>
            <h4>Bellman Ford</h4>
                      
            <h3>Dynamic Programming</h3>
            <h3>Advanced Topics</h3>
      
            
        
</div>
    ]


} ;



const AlgorithmsPage  = (props) => {
      return (
        <BlogPage  
          title={algorithms.title}
          contents={algorithms.contents}
          text={algorithms.text}
        />
      );
    }


export default AlgorithmsPage;
