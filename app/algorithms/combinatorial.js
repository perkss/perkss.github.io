import React from 'react';
import BlogPage from "../blog-page";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {Link} from "react-router-dom";

const algorithms = {
    title: 'Combinatorial',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#BackTracking"}>Backtracking</Link></li>
            </ul>

            <h3 id={"BackTracking"}>Backtracking</h3>

            <p>Backtracking is a technique for solving problems where it trys to build the correct solution
                incrementally and if it fails to meet the constraints at any time it backtracks and trys another
                route. It can be thought of as trying every single possible option that the solution could be then if it
                fails it backtracks to another option and attempts that until the solution is found all or options are
                exhausted.</p>

            <p>Backtracking provides a template for solving these problems which can be adapted to work for different
                issues. We will run through this solution template and then apply it to some LeetCode examples.</p>

            <h4>When to use Backtracking</h4>

            <p>Backtracking is generally used for <strong>Constraint Satisfaction Problems</strong> which means a
                problem defined as a set of objects whose state must satisfy a constraint.</p>

            <p><strong>Decision Problems</strong> where we search for a feasible solution.</p>
            <p><strong>Optimization Problems</strong> where we search for the best solution.</p>
            <p><strong>Enumeration Problems</strong> find all possible solutions.</p>

            <h4>Brute Force Search and Backtracking</h4>

            <h5>Search Tree</h5>

            <p>In very simple terms we can think of backtracking as building and exploring a search tree in a depth
                first search manner. The root node of the tree or the current path to the leaf node represents
                a <strong>candidate solution</strong>. If the candidate solution is valid it is kept and traversal can
                continue or stop. If a candidate solution fails then we step back up the graph and try a different path.
            </p>

            <p>Therefore we are pruning away branches of the tree that would not lead to a solution solving the
                constraint satisfaction problem.</p>

            <h4>Template</h4>

            <h4>Finding N Combinations</h4>

            <p>The problem lets find all possible <i>N</i> items from a given set of items. In this case
                given [A,B,C,D] and N=3 the sets are [A,B,C], [A,B,D], [A, C, D], [B,C,D].</p>

            <p><a
                href={"https://algodaily.com/lessons/recursive-backtracking-for-combinatorial-path-finding-and-sudoku-solver-algorithms"}>Algo
                Daily</a> have a great tutorial on basic examples, this is a modified Java version using characters but
                the idea is the same.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`import java.util.*;

public class NCombinatorial {

    private static boolean isSolution(int n, LinkedList<Character> result) {
        return n == result.size();
    }

    public static void search(List<Character> input, int n, LinkedList<Character> result, int currentIdx, List<List<Character>> finalResult) {
        if(isSolution(n, result)) {
            System.out.println("Result=" + result);            
            finalResult.add(new ArrayList(result));
            return;  
        } else{

            // candidates is starting from currentIdx
            for(int i = currentIdx; i<input.size(); i++) {
                // add item to search tree
                result.add(input.get(i));

                // move index + 1
                search(input, n, result, i + 1, finalResult);

                // remove added item -- backtrack
                result.remove(result.size()-1);    
            }
            
        }
    }

    public static void main(String[] args) {
        System.out.println("NCombinatorial");
        List<Character> input = new LinkedList<>();
        input.add('a');
        input.add('b');
        input.add('c');
        input.add('d');

        LinkedList<Character> result = new LinkedList<>();

        List<List<Character>> finalResult = new ArrayList<>();
        search(input, 3, result, 0, finalResult);

        System.out.println(finalResult);
    }

}
`}</SyntaxHighlighter>

            <h4>N Queens</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>


            <h4>Hamiltonian Cycle</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>
            <h4>Graph Coloring</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>
            <h4>Knights Tour</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>

            <h4>Maze Problem</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>


        </div>
    ]
}

const Combinatorial = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Combinatorial;