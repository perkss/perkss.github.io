import React from 'react';
import BlogPage from "../blog-page";
import binarytree from "../../images/binarytree.png";
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Trees And Graphs',
    contents:
        '',
    text: [
        <div>
            <ul className="text-list">
                <li><Link to={"#Tree"}>Tree</Link></li>
                <li><Link to={"#BinaryTree"}>Binary Tree</Link></li>
                <ul className="text-list">
                    <li><Link to={"#btbfs"}>Breadth First Search</Link></li>
                    <li><Link to={"#btdfs"}>Depth First Search</Link></li>
                </ul>
                <li><Link to={"#balancedtree"}>Balanced Tree</Link></li>
                <ul className="text-list">
                    <li><Link to={"#redblack"}>Red Black Tree</Link></li>
                    <li><Link to={"#avltree"}>AVL Tree</Link></li>
                </ul>
                <li><Link to={"#Matrix"}>2D Arrays (Matrices)</Link></li>
                <ul className="text-list">
                    <li><Link to={"#dfs"}>Depth First Search</Link></li>
                    <li><Link to={"#bfs"}>Breadth First Search</Link></li>
                </ul>
                <li><Link to={"#Graphs"}>Graphs</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Representations"}>Representations</Link></li>
                    <li><Link to={"#Traversal"}>Traversals</Link></li>
                    <ul className="text-list">
                        <li><Link to={"#gdfs"}>Depth First Search</Link></li>
                        <li><Link to={"#gbfs"}>Breadth First Search</Link></li>
                    </ul>
                    <li><Link to={"#DAG"}>Directed Acyclic Graph</Link></li>
                    <li><Link to={"#weighted"}>Weighted Graph</Link></li>
                    <li><Link to={"#trie"}>Trie Tree</Link></li>
                </ul>
            </ul>

            <h3 id={"BinaryTree"}>Binary Tree</h3>
            <p>A binary tree is where each node in the tree has no more than two child nodes. Where as a standard tree
                can
                have as many or little as required. A full binary tree is a tree that each node has two child nodes
                other than the leaves. A complete binary tree is one where all levels are full except the last and this
                is filled from the left side.</p>

            <h4>Traversal vs Searching</h4>

            <p>Searching through a binary tree can be either done using Breadth First Search or Depth First Search. When
                using DFS there are three types of traversal pre-order, in-order and post-order.
                Searching and traversing are different. Traversing is a subpart of searching using DFS. You first choose
                the type of search. </p>

            <h4>When to use BFS or DFS</h4>

            <p>Usually DFS is used if you are going deep into the tree, finding if a path exists or
                you are traversing a very wide tree. DFS is is more memory efficient but can be slow. Where as if the
                node is closer to your source use or if you are finding the
                finding shortest path, or rare solutions exist but very deep tree you tend to use BFS but this uses more
                memory. Due to the way it enqueues the whole level each time.</p>

            <p>Finding the next node in traversal order is useful and this next node is
                called <strong>successor</strong>.
                If you want to find the previous node in the order this is called the <strong>predecessor</strong>.
                Finding
                these differ depending on your traversal order.
            </p>

            <h3>Binary Search Tree</h3>

            <p>A binary search tree compared to a binary tree ensures the ordering of nodes is sorted. So a root nodes
                left child is always less than the root node, and its right child is always greater than.</p>

            <p>A search tree can be used as both a dictionary and a priority queue due to its ability to search, min,
                max, predecessor, successor, insert and delete. Such operations take &Theta;(lg n) worst case time
                proportionately to the height of the tree however if the tree is a linear set of nodes they
                take &Theta;(n).</p>

            <p>Binary search tree is represented by nodes linked where each node has a key and the satellite data along
                with a left, right and parent attribute. The <strong>binary search tree property</strong> that must be
                satisfied is let x be a node if y is a node in the left subtree its key is less than or equal to x.key,
                else if y is a node in the right subtree then y.key is greater than or equal to x.key.</p>

            <p>There are three methods for traversal of keys in a binary search tree, you can print the sorted keys
                with in order tree walk, preorder prints the root before the leaves and post order prints the leaves
                before the roots.</p>


            <h4>Questions to ask when coming across Binary Tree Problems</h4>

            <ul className="text-list">
                <li>Does traversal matter? If so should it be BFS or DFS</li>
                <li>If it is DFS then should the traversal order matter Pre, In, Post Order or does not matter.</li>
            </ul>

            <h4>Traversing a Binary Tree</h4>

            <p>A tree has exactly one root and no loops. A binary tree only has at most two children per node.</p>

            <h5 id={"btbfs"}>Binary Tree Traversal with Breadth First Search (Iterate)</h5>
            <p>Here we traverse each level and we represent the level with a queue as it is FIFO. We can do this
                iteratively.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<Integer> bfsIterate(Node root) {
   Node curr = root;
   List<Integer> traversed = new ArrayList<>();
   // BFS is the FIFO queue
   Queue<Node> queue = new LinkedList<>();

   queue.add(curr);
   while(!queue.isEmpty()) {
     curr = queue.poll();
     if(curr != null) {
        System.out.println("-> " + curr.val);
        traversed.add(curr.val);
        // or you check if not null add before here
        queue.add(curr.left);
        queue.add(curr.right);
     }
   }

  return traversed;
}`}</SyntaxHighlighter>

            <h5 id={"btdfs"}>Binary Tree Traversal with Depth First Search (Recursive)</h5>

            <p>All of the following traversals are <i>O(n)</i>. These traversals differ to graphs as graphs have to
                record visited to protect against loops. They are binary tree specific and are options when you need
                to consider the data held in each row. They are all DFS traversals.</p>


            <p>Example if we have a tree where we insert these values <i>15,10,20,8,12,16,25</i> we will traverse it out
                as the following.</p>

            <img width="90%" height="90%" src={binarytree} alt="Binary Tree Image"/>

            <ul className="text-list">
                <li>Pre Order [15, 10, 8, 12, 20, 16, 25] Top Down</li>
                <li>In Order [8, 10, 12, 15, 16, 20, 25] Sorted Order</li>
                <li>Post Order [8, 12, 10, 16, 25, 20, 15] Bottom Up</li>
            </ul>

            <p><strong>In Order Traversal (DFS)</strong> (Left, Root, Right), you traverse the left tree (call
                inOrder(node.left)) then you print root then you traverse right tree (call inOrder(node.right)).</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`void inOrder(Node node) {
        if(node == null) {
            return;
        }

        inOrder(node.left);
        // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        System.out.println(node.data);
        inOrder(node.right);
    }`}</SyntaxHighlighter>

            <p>This order will result in a ordered result list if it is a binary search tree, and you can find the
                minimum by traversing to the left most node or the maximum by traversing to the right most node. To find
                the <strong>successor</strong> if the right node is not null we find the minimum of the right subtree.
                If the right node is null then we walk up the parents subtree to find the lowest ancestor (the parent
                that is not on the left of the node). The <strong>predecessor</strong> can be found by checking the
                maximum value in the left subtree. If it does not have a left subtree it is the first left ancestor.</p>

            <p><strong>Pre Order Traversal (DFS)</strong> (Root, Left, Right) here you call print root.data then
                preOrder(root.left) and then preOrder(root.right). This sets the order out as the order of the tree
                to
                build so is useful if you want to rebuild a tree.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` void preOrder(Node node) {
        if(node == null) {
            return;
        }
        // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        // mutates the list or can return the list
        System.out.println(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }`}</SyntaxHighlighter>

            <p>For example returning the list.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<Integer> dfsPreOrder(Node root, List<Integer> traversed) {
        if(root == null) {
            return traversed;
        }
        // Preorder
        traversed.add(root.val);
        if(root.left != null) {
         dfsPreOrder(root.left, traversed);
        }

        if(root.right != null) {
         dfsPreOrder(root.right, traversed);
        }
        return traversed;
     }`}</SyntaxHighlighter>

            <p><strong>Post Order Traversal (DFS)</strong> (Left, Right, Root) here you call postOrder(root.left)
                then
                postOrder(root.right) and then print root.data. To delete a tree one by one post order should be
                used.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`void postOrder(Node node) {
        if(node == null) {
            return;
        }

        postOrder(node.left);
        postOrder(node.right);
         // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        System.out.println(node.data);
    }`}</SyntaxHighlighter>

            <h4>Height of a Binary Tree (DFS)</h4>

            <p>This is straightforward we need to find the deepest path down to the leaves of the tree. You get max
                depth of the left subtree, get max depth of the right subtree and then take the max of the two
                subtrees
                and +1 for the root. This is <i>O(n)</i>. The algorithm to find the deepest path is DFS.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int maxDepth(BinaryNode root, int count) {
        if(root == null) {
            return count; // the current count back when hit the end
        } else {
            
            //  hit a new level increment
            count++;
                
            int lDepth = maxDepth(root.left, count);
            int rDepth = maxDepth(root.right, count);

            // each side returns of the binary tree take the max depth
            return Math.max(lDepth, rDepth)
        }
    }`}</SyntaxHighlighter>

            <h4>Level order Binary Tree (BFS)</h4>

            <p>The requirement here is to record the level order (the ordered values) on each level of the binary
                tree.
                BFS will traverse the nodes in the right order, but how we keep track of the levels. We need to
                track
                the size of the queue this is the level size. We then take the node and the level size and process
                the
                whole level. Then we exit the level add to the levels array and then start again get level size,
                init
                new level add the nodes of children and reduce the level size as we processed one item in that level
                and
                continue. This has a time complexity of <i>O(n)</i> and a space complexity of the nodes <i>O(n)</i>
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public List<List<Integer>> bfs(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList();
        List<List<Integer>> levels = new ArrayList();
        
        int level = 0;
        
        if(root != null) {
            queue.add(root);
        }
       
              
        while(!queue.isEmpty()) {
            // get the current levle size
            int levelSize = queue.size();
            
            // add a blank level
            levels.add(level, new ArrayList());
            
            // whilst we have a level poll and then add the nodes to queue and add them to level
            while(levelSize != 0) {
                TreeNode node = queue.poll();    
                
                // add the node to the left of the queue
                // and add it to the current level
                if(node.left != null) {
                    queue.add(node.left);
                }
            
                if(node.right != null) {
                    queue.add(node.right);
                }
                
                levels.get(level).add(node.val);
                // processed a item in that level reduce its size
                levelSize--;
            }
            
            
            // processed a level fully increment it
            level++;
           
            
        }
        
        return levels;
    }`}</SyntaxHighlighter>

            <h4>View a Tree from the right side (BFS approach)</h4>

            <p>This problem is similar to the above if using BFS approach we say we are stood on the right of a Tree,
                and we can only see the nodes from the right side that are not blocked by nodes on that level
                further to the right.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public List<Integer> bfsApproach(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        
        List<Integer> result = new ArrayList<>();
        
        if(root == null) {
            return result;
        }
        
        queue.add(root);
        
        while(!queue.isEmpty()) {
            
            // get level size
            int levelSize = queue.size();
            
            // move along the level horizontally
            while(levelSize > 0) {
                // take node on level
                TreeNode curr = queue.poll();
            
                // if the size of the level is now 1 its the right most node and we add to result
                if(levelSize == 1) {
                    // last item in it
                    result.add(curr.val);
                }
                
                // add children
                if(curr.left != null) {
                    queue.add(curr.left);
                }
                
                if(curr.right != null) {
                    queue.add(curr.right);
                }
                
                // can only see right most so ignore others and decrement level size
                levelSize--;
            }
            
        }
        
        return result;
        
    }`}</SyntaxHighlighter>

            <p>A depth first search approach is also possible with a Right to Left pre order traversal, where we track
                the level nodes if a level already had a right node added then it is blocked so we do not add it.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// dfs approach
    // to a in order R N L with the usual process reveresed go right first
    // keep a level param where it increments on entry and decrements on return
    // keep a list where the level is the index if the level is already populated
    // then we skip it as its blocked from our view
    
    public List<Integer> dfsApproach(TreeNode root, List<Integer> traversed, int level) {
        if(root == null) {
            return traversed;
        }
        
        // if the level equals the size of the current list
        if(level >= 0 && level == traversed.size()) {
            traversed.add(level, root.val);
        }
        
        // moved to the children to be added to stack so increase level
        level++;
        
        if(root.right != null) {
            dfsApproach(root.right, traversed, level);
        }  
        
        if(root.left != null) {
            dfsApproach(root.left, traversed, level);
        } 
         
        return traversed;
    }`}</SyntaxHighlighter>

            <h4>Validating a Binary Search Tree</h4>

            <p>The challenges on <a
                href={"https://leetcode.com/problems/validate-binary-search-tree/"}>leetcode</a> asks to validate if a
                given tree is a valid binary search tree. To approach this we need to think about relationships between
                nodes we want to compare the root node value to its children therefore we are searching with depth first
                so we use DFS. We then need to track the constraints of the node what is its min it needs to be larger
                than and what is its max it needs to be smaller than. We can then pass these at each recursive step and
                validate if valid then apply and pass the new value as the max to the left node and the new value as the
                min to the right node.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean isValidBST(TreeNode root) {
        // dfs 
        // covers the case where its negative or positive max size
        return dfs(root, null, null);
    }
    
    public boolean dfs(TreeNode root, Integer min, Integer max) {
        if(root == null) {
            return true;
        }
        
        // not valid node as doesnt fall between min and max
        if((min != null && root.val <= min) || (max != null && root.val >= max)) {
             return false;
        }
        
        
        // check the left side of the tree
        if(root.left != null) {
            if(!dfs(root.left, min, root.val)) {
                return false;
            }
        }
        
        // check the right side of the tree
        if(root.right != null) {
            if(!dfs(root.right, root.val, max)) {
                return false;
            }
        }
        
        return true;  
    }`}</SyntaxHighlighter>

            <h3 id={"balancedtree"}>Balanced Binary Trees</h3>

            <p>As we have seen operations in binary trees can take up to the height of the tree <i>O(h)</i> where the
                height of the tree can be a worst case <i>O(n)</i>. When the tree is unbalanced. Ideally we keep the
                tree balanced so we can keep the height to <i>O(log n)</i>. Two common data structures exist for this.
            </p>

            <h4 id={"redblack"}>Red Black Tree</h4>

            <p>Red Black trees were inspired by 2-3 trees. They keep a balanced tree by rotating the nodes if they do
                not meet the properties required of a RB tree. These properties are as follows: Every node is either
                Black or Red. All NULL nodes are considered black. A red node does not have a red child. Every path from
                any node goes through the same number of black nodes to its descendants. This data structure is used for
                the Java TreeMap and TreeSet.</p>

            <p>When inserting a new node the new node is always red. As this doesnt invalidate the depth rule and makes
                balancing easier. When inserting we then apply logic to rebalance the tree by rotating or flipping
                colours.</p>

            <p>This results in insertion <i>O(log n)</i>, deletion <i>O(log n)</i> and search <i>O(log n)</i>.
                Rebalancing has a worst case of <i>O(log n)</i> with a average case of <i>O(1)</i></p>

            <h4 id={"avltree"}>AVL Tree</h4>

            <p>AVL Trees are another balanced tree data structure. These work by maintaining an extra field for each
                node of the balance factor. The <strong>balance factor</strong> is the difference between the height of
                the left subtree and the right subtree of the node.</p>

            <p><i>Balance Factor = (Height of Left Subtree - Height of Right Subtree) or (Height of Right Subtree -
                Height
                of Left Subtree)</i></p>

            <p>When inserting or deleting a node we do the process like a usual binary tree but then we update the
                balance factors of the nodes and if the balanced factor is greater than 1, it means the height of the
                left subtree is greater than the right subtree so we rotate. We rotate right if the newNodeKey inserted
                is less than the left child key otherwise rotate left.</p>

            <p>This results in insertion <i>O(log n)</i>, deletion <i>O(log n)</i> and search <i>O(log n)</i>.</p>

            <h3 id={"Matrix"}>2D Array (Matrices)</h3>

            <p>Following on from Binary Tree when doing interview questions 2D array questions are common and follow a
                lot of the techniques used in Binary Trees.</p>

            <h4>Navigation</h4>
            <p>To move from a position in a 2D array you can move any position from your current as long as it is within
                the boundary of the 2D array. To find the length of a 2D arrays row you use the array.length and to find
                the
                length of the 2D arrays column you use the first row and then call array[0].length</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int numberOfRows = matrix.length // height`}</SyntaxHighlighter>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int numberOfColumns = matrix[0].length // width`}</SyntaxHighlighter>

            <p>To check that a row or column is in a valid position you check if they are greater than 0 and within the
                lengths of the rows (height) and columns (width).</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`if(row < 0 || row >= matrix.length || column < 0 || column >= matrix[0].length
     || seen[row][column] == true) {
     // out of bounds
     return;
 }`}</SyntaxHighlighter>

            <h5>2D Array Sequential Order Traversal Left to Right, Row by Row</h5>

            <p>To simply start at the top left and traverse from left to right and row by row we can use the following
                code. We iterate with an outer loop through each row and inside we iterate through the length of the row
                which is each column.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] sequentialTraversal(int[][] matrix) {
    int[] values = new int[matrix.length * matrix[0].length];

    int idx = 0;
    // iterate the first row
    for(int row = 0; row<matrix.length; row++) {
       // iterate the columns in the selected row
       for(int col = 0; j<matrix[row].length; col++) {
           values[idx] = matrix[row][col];
           idx++;
       }
    }

    System.out.println(Arrays.toString(values));
    return values;
}`}</SyntaxHighlighter>

            <p>The directions to move are simple then if we view it as this we can move UP[-1,0], Right[0, 1], Down[1,
                0], Left[0,-1]. To traverse a 2D array we can then do a depth first search starting at the top left and
                tracking the seen values. Then attempting to move in each direction and only progressing if it is a
                valid move. We then store the seen value and set the seen position to true.</p>

            <h5 id={"dfs"}>2D Array Depth First Search</h5>

            <p>This example code shows how to DFS through a 2d array starting from the top left and moving along
                attempting Up, Right, Down and Left. With DFS we keep going in one direction until we hit the end.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`private int[][] directions = new int[][] {
    {-1, 0}, // Up
    {0, 1}, // Right
    {1, 0}, // Down
    {0, -1} // Left
    };

public int[] traversalDfs(int[][] matrix) {
    // track the seen items
    boolean[][] seen = new boolean[matrix.length][matrix[0].length];

    // flat array of the values seen
    int[] values = new int[matrix.length * matrix[0].length];

    //dfs starting at top left corner, pass seen and values to be added for result
    dfs(matrix, 0, 0, seen, values, 0);

    return values;

}
// Time O(n) as touch each item
// Space O(n) as seen
        // as we set the values we dont need to return
private void dfs(int[][] matrix, int row, int column, boolean[][] seen, int[] values, int place) {
    if(row < 0 || row >= matrix.length || column < 0 || column >= matrix[0].length
        || seen[row][column] == true) {
        // out of bounds
        return;
    }

    // seen this value set
    seen[row][column] = true;
    // add the value into the right place
    values[place] = matrix[row][column];

    // iterate over each direction and try it out dfs
    for(int i = 0; i<directions.length; i++) {
        int[] currentDirection = directions[i];// get the direction pair
        // traverse that with the new direction recursively dfs
        dfs(matrix, row + currentDirection[0], column + currentDirection[1], seen, values, place + 1);
    }
}

    
    `}</SyntaxHighlighter>

            <p>This approach of DFS using these direction order of UP, Right, Down, Left results in a spiral result.</p>

            <p>The time complexity is also <i>O(MxN)</i> with a space of <i>O(MxN)</i></p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    // a row is 1,2,3,4,5
    // a column is 1,6,11,16
    int[][] testMatrix = new int[][] {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15},
        {16,17,18,19,20},
    };
    
    Result
    [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]`}</SyntaxHighlighter>

            <p>If we change the direction order to Right, Left, Up, Down we get a zig zag across right, down, across
                left pattern as follows.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` private int[][] directions = new int[][] {
{0, 1}, //RIGHT
{0, -1}, //LEFT
{-1, 0}, // UP
{1, 0} // DOWN
};

int[][] testMatrix = new int[][] {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15},
        {16,17,18,19,20},
    };

[1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15, 20, 19, 18, 17, 16]
`}</SyntaxHighlighter>

            <h5 id={"bfs"}>2D Array Breadth First Search</h5>

            <p>With breadth first search we start at a location in the 2D array and we spiral out of it adding each
                position (row,column) to the queue if not already visited and then spiraling out from each of these.
                This approach is usually done iteratively and follows the standard approach of adding each item next to
                the selected row column to a queue and then taking the next item off the queue and adding its
                neighbours onto the queue if they have not already been visited.</p>

            <p>For tracking we have visited a position we use a helper pair class.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static class Pair {

    public int row;
    public int column;

    public Pair(int row, int column) {
        this.row = row;
        this.column = column;
    }

    @Override
    public String toString() {
        return this.row + ":" + this.column;
    }
}`}</SyntaxHighlighter>

            <p>We have a first call to traversal that will set the seen array to track if we have seen values by
                recreating matrix as boolean false. And initialise an array of integers.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] bfsTraversal(int[][] matrix) {
    boolean[][] seen = new boolean[matrix.length][matrix[0].length];

    //values length is the area of the 2D array
    int[] values = new int[matrix.length * matrix[0].length];

    bfs(matrix, values, seen);

    return values;
}`}</SyntaxHighlighter>

            <p>We now have the main BFS method that will create a queue, stick the first point on it (0,0) and then
                iterate over each direction and add these if valid (in the 2D array) or not already been seen to be
                processed. This has a space of <i>O(MxN)</i> for the seen matrix and values. The time complexity is
                also <i>O(MxN)</i>.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public void bfs(int[][] matrix, int[] values,  boolean[][] seen) {
    Queue<Pair> next = new LinkedList<Pair>();

    // start in top left
    int row = 0;
    int column = 0;
    //set a starting position and its been seen
    next.add(new Pair(row,column));
    seen[row][column] = true;
    int valueIdx = 0;
    // while queue is not empty
    while(!next.isEmpty()) {
       Pair idx = next.poll();
       System.out.println(next);
       row = idx.row;
       column = idx.column;
       values[valueIdx] = matrix[row][column];
       // added value now move to add next
       valueIdx++;

        for(int i = 0; i<directions.length; i++) {
            int newRow = row +  directions[i][0];
            int newColumn = column + directions[i][1];


            System.out.println("newRow = " + newRow + " newCol = " + newColumn);
            // if not already visited and a valid row,col then add to be processed
            if(newRow >= 0 && newRow < matrix.length && newColumn >= 0 &&
                newColumn < matrix[0].length && seen[newRow][newColumn] == false) {
                next.add(new Pair(newRow, newColumn));
                seen[newRow][newColumn] = true;
            }
        }
    }
}`}</SyntaxHighlighter>

            <p>This gives the following result on the test data provided of traversal with directions of Up, Right,
                Down, Left of a zig zag pattern.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int[][] testData = new int[][]{
             {1,2,3,4,5},
             {6,7,8,9,10},
             {11,12,13,14,15},
             {16,17,18,19,20}
          };
          
          [1, 2, 6, 3, 7, 11, 4, 8, 12, 16, 5, 9, 13, 17, 10, 14, 18, 15, 19, 20]
`}</SyntaxHighlighter>

            <h4>Which search is better to use?</h4>

            <p>Breadth first search is good for finding items close together.</p>

            <h4>Tackling 2D Array Questions</h4>

            <p>When getting a question on 2D arrays you should focus on the values each item in the inner array. They
                are usually limited such as one of three kind of values or unlimited can be anything. A question to ask
                is there a relationship between values? Next question is there a repeated sub-problem to solve (e.g. how
                many steps to take from value A to B). We want to think about sequential order rather than search
                approach. Then we can scan 2D array to find value to solve the problem. Solve this sub-problem. Then
                continue sequential search to the end.</p>

            <h4>Problem 1: Number of Islands</h4>

            <p><a href={"https://leetcode.com/problems/number-of-islands/"}>Leetcode</a> question for number of islands.
                <i> Given a 2D array containing only 1s representing islands and 0 representing water. Count the number
                    of
                    islands. An island is land connected vertically or horizontally.</i> This is an example of a limited
                value question.
            </p>

            <p>Questions to ask, are the edges of the 2D array classed as water? Yes they are.</p>

            <p>Edge cases single islands, empty array, empty nested array. Does the order of traversal matter? Where to
                start? How do we ensure we do not double count the islands?</p>

            <h5>The Approach</h5>
            <p>For this question we can traverse from the top left all the way through the 2D array rather than use DFS
                or BFS we can use sequential search which saves on space complexity. When we discover a
                1 we do a dfs or a bfs search to find the island until the boundary or 0. We increment the number of
                islands by 1 and
                we record these as visited by flipping its value to 0 rather than create another array. Then we continue
                traversal sequentially and ignore any already visited or 0 until we find the start of the next
                island.</p>

            <p>The coded solution here is using BFS as the solution to the sub-problem. It can also be done with DFS.
                Comparing the two solutions BFS is in our approach is slightly more efficient. First time complexity our
                sequential search touches each element in the array. And this is O(NxM). Space complexity is the maximum
                size of the queue in the BFS which is the Max(N,M) as it will only be the size of diagonal of it so we
                are constrained by the farthest width of the structure so M or N. This may not be the case in all BFS
                solutions. For DFS the space complexity could hold the entire grid in the stack so O(MxN). The time
                complexity is the same as O(NxM) as it touches each item in array.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int numIslands(char[][] grid) {
        
        if(grid.length == 0) return 0;
        
        int totalIslandCount = 0;

        
        // sequentially iterate over each cell in grid
        for(int row = 0; row<grid.length; row++) {
            for(int col = 0; col<grid[row].length; col++) {
                // do a BFS on each cell 
                boolean isIsland = bfs(grid, row, col);
                if(isIsland) {
                    totalIslandCount++;
                }
            }
        }
        
        return totalIslandCount;
        
    }
    
    static class Pair {
        
        public int row;
        public int column;
        
        public Pair(int row, int column) {
            this.row = row;
            this.column = column;
        }
        
    }
    
    private int[][] directions = new int[][]{
        {-1,0}, //UP
        {0,1}, //RIGHT
        {1,0}, //DOWN
        {0,-1} // lEFT
    };
    
    
    // is in bounds, not visited already and is an island
    private boolean isValidMove(char[][] grid, int row, int column) {
        if(row < 0 || column < 0 || row >= grid.length || column >= grid[row].length 
            || grid[row][column] == '0') {
            return false;
        } else {
            return true;
        }
        
    }
    
    public boolean bfs(char[][] grid, int row, int column) {
        boolean isIsland = false;
        // add the first item but check if its a 1 and not already visited
        if(grid[row][column] == '1') {
            Queue<Pair> next = new LinkedList<Pair>();
        
            next.add(new Pair(row, column));
      
     
    
            isIsland = true;
            // if visited we flip it to zero so its seen as visited from now on
            grid[row][column] = '0';
            while(!next.isEmpty()) {
            
            Pair nextPair = next.poll(); 
            
            // iterate over each direction
            for(int i = 0; i<directions.length; i++) {
                int[] direction = directions[i];
                int newRow = nextPair.row + direction[0];
                int newColumn = nextPair.column + direction[1];
                
                // if is valid move and not visited
                if(isValidMove(grid, newRow, newColumn)) {
                    next.add(new Pair(newRow, newColumn));
                    // mark as visited by flipping it from 1 to 0
                    grid[newRow][newColumn] = '0';
                }

            }
        }
        }
            
        return isIsland;
        
    }`}</SyntaxHighlighter>

            <h3 id={"Tree"}>Trees</h3>

            <h5>Tree Breadth First (Level Order Traversal)</h5>

            <p>Here we are using a BFS basically to go through each level of the tree. We use a queue to push each
                node
                on. Then take off the queue the first node then print the data and adds its connected nodes to the
                queue. We then repeat this while the queue is not empty.</p>

            <p>This technique is <i>O(n)</i>.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`boolean breadFirstSearch(Node root, int searchKey) {
        if (root == null) {
            return false;
        }

        // Queue to hold the nodes visiting
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // loop over queue items.
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            System.out.println(current.key);
            if (current.key == searchKey) {
                return true;
            }
            queue.addAll(current.children);
        }
        return false;
    }`}</SyntaxHighlighter>


            <h3 id={"Graphs"}>Graphs</h3>

            <p>Graphs are made up on vertices (nodes) and edges. A graph can contain cycles where a tree cannot. Where
                nodes have a circular connections. A vertex can have a cycle to itself. Graphs can have undirected edges
                where you can traverse in both directions. Directed graphs are where the edges have specific
                directions. The edge can be directed both ways or only one way. Any undirected graph can be seen as a
                directed graph where each edge is directed both ways. Graphs can also have weights associated
                with edges, where they have a cost of traversing different nodes.</p>

            <h4 id={"Representations"}>Representations</h4>

            <p><strong>Edge List</strong> represents the pairs of edge connections.</p>

            <p><strong>Adjacency list</strong> represents graphs where the index in the array is the vertex with a list
                of connected
                vertices. This only works with integers. If you have string values such as A,B,C this can be represented
                as a MAP or map the index to the letter. The benefit of adjacency list is fast lookup.</p>

            <p><strong>Adjacency Matrix</strong> where each row is the vertex and if its connected to an edge then we
                mark it as 1 at the connected vertex position in the matrix row if no connection mark it as 0. This
                approach uses a lot of space to store it.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    // Represents each connection with starting node and ending node.
    private int[][] edgeList = {{0, 2}, {1, 3}, {2, 3}, {2, 4}, {3, 5}, {4, 5}};
    // Rows are the nodes with the index matching and a 1 is representing a connection.
    private int[][] adjMatrix = {
            {0, 0, 1, 0, 0, 0},
            {0, 0, 0, 1, 0, 0},
            {0, 0, 0, 1, 1, 0},
            {0, 0, 0, 0, 0, 1},
            {0, 0, 0, 0, 0, 1},
            {0, 0, 0, 0, 0, 0}};
    // Index is node and list is values associated. Most efficient memory wise.
    private int[][] adjList = {{2}, {3}, {3, 4}, {5}, {5}, {}};`}</SyntaxHighlighter>
            <h5>Converting a Question to a Adjacency List</h5>
            <p>When cracking a coding question that looks like it should be a graph the best thing to do is to convert
                it into a Adjacency List.</p>

            <p>For example this <a href={"https://leetcode.com/problems/time-needed-to-inform-all-employees/"}>Time
                Needed to inform all employees</a> question. The manager list represents a graph and can be converted to
                an adjacency list.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// convert array to adjacency list
             int[] managers = new int[]{2,2,4,6,-1,4,4,5};

             List<List<Integer>> adjGraph = new ArrayList<>();

             // prepopulate

             for(int i = 0; i<managers.length; i++) {  // O(n)
                 adjGraph.add(i, new ArrayList<Integer>());
             }

             // then assign the managers to subordinates inverse it
             for(int i = 0; i<managers.length; i++) {  // O(n)
                 // ignore manager
                 if(managers[i] != -1){
                     adjGraph.get(managers[i]).add(i);
                 }
             }

             System.out.println(adjGraph);`}</SyntaxHighlighter>

            <h5>Converting a Adjacency Matrix to a Adjacency List</h5>
            <p>To do this you can simply create a list of lists the length of the matrix. The iterate through the
                matrix row by row from left to right with a double for loop. Then add into the adjacency list if
                the matrix value is 1.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static List<List<Integer>> matrixToList(int[][] matrix) {
         List<List<Integer>> adjList = new ArrayList<>();
         // pre create lists
         for(int i = 0; i<matrix.length; i++) {
             adjList.add(i, new ArrayList<>());
         }
         // insert the 1s in the matrix to correct place in list
         // by iterating row by row of matrix
         for(int i = 0; i<matrix.length; i++) {
             for(int j = 0; j<matrix[i].length; j++) {
                 if(matrix[i][j] == 1) {
                     adjList.get(i).add(j);
                 }
             }
         }


         System.out.println(adjList);
         return adjList;
     }`}</SyntaxHighlighter>

            <h4 id={"Traversal"}>Traversing a Graph</h4>

            <p>The difference between a Graph and Tree is that a graph may have loops, it has no root node and edges
                can be directed or undirected.</p>

            <p>The time complexity of graphs for BFS and DFS differ than trees and is <i>O(V+E)</i></p>

            <h4 id={"gbfs"}>Graph Breadth First Search</h4>

            <p>You begin with your starting node provided in the graph and the list of vertices. You again use a
                queue
                data structure to hold the nodes when processing them and this time you are also required to have a
                map/array of visited nodes. Firstly start with all nodes marked as unvisited. Start at the starting
                node
                add to queue then while queue is not empty do the following display data, remove node from queue,
                for
                all adjacent vertices to the node add to the queue. Mark node as visited and repeat. </p>

            <h5>Graph Breadth First Search (Node)</h5>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`if (root == null) {
            return Collections.emptyList();
        }

        // Hold a list of visited nodes to protected against cycles
        List<Node> visited = new ArrayList<>();
        List<Integer> foundKeys = new ArrayList<>();
        // Queue to hold the nodes visiting
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // loop over queue items.
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            System.out.println(current.key);
            foundKeys.add(current.key);
            visited.add(current);

            // only check those not already visited
            for (Node adjacentNode : current.adjacentNodes) {
                if (!visited.contains(adjacentNode)) {
                    queue.add(adjacentNode);
                }
            }
        }
        return foundKeys;
    }`}</SyntaxHighlighter>

            <h5>Graph Breadth First Search (Adjacency List)</h5>
            <p>In the breadth first search for an adjacency list we track the vertex visited to protect against cycles.
                The we iterate through the connections for each node we are working on starting from a starting node. If
                we have not already visited a node we add it to the queue to be processed. This is then processed in the
                same way once removed from the queue.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int[][] graphAdj = new int[][]{
              {1,3},
              {0},
              {3,8},
              {0,4,5,2},
              {3,6},
              {3},
              {4,7},
              {6},
              {2}
              };`}</SyntaxHighlighter>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] bfs(int[][] graph) {
    if(graph.length == 0) {
        return new int[0];
    }

    int[] path = new int[graph.length];
    Queue<Integer> next = new LinkedList<>();
    int pathIdx = 0;
    boolean[] visited = new boolean[graph.length];
    // add starting vertex
    next.add(0);
    visited[0] = true;
    while(!next.isEmpty()) {
        int vertex = next.poll();
        // add to path
        path[pathIdx] = vertex;
        pathIdx++;
        // add the children
        int[] connections = graph[vertex];
        for(int i = 0; i<connections.length; i++) {
            // if not already visited add to be processed
            if(!visited[connections[i]]) {
                // next item to process in BFS
                next.add(connections[i]);
                // visited
                visited[connections[i]] = true;
            }
        }
    }
    return path;
}`}</SyntaxHighlighter>

            <h4 id={"gdfs"}>Graph Depth First Search</h4>

            <p>For depth first search of a graph you have the starting node which you place onto a stack. Pop the
                stack and print data. Then mark as visited. For all nodes connected to the starting node and not visited
                push onto the stack, continue while stack is not empty.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`List<Integer> depthFirstSearch(Node node) {
        if (node == null) {
            return Collections.emptyList();
        }

        List<Integer> foundKeys = new ArrayList<>();
        List<Node> visited = new ArrayList<>();
        Deque<Node> stack = new LinkedList<>();

        stack.addFirst(node);

        while (!stack.isEmpty()) {
            Node popped = stack.removeFirst();

            // May already have been visited from another node adjacent nodes
            if(!visited.contains(popped)) {
                System.out.println(popped.key);
                foundKeys.add(popped.key);
                visited.add(popped);
            }

            for (Node adjacent : popped.adjacentNodes) {
                if (!visited.contains(adjacent)) {
                    stack.addFirst(adjacent);
                }
            }

        }
        return foundKeys;
    }`}</SyntaxHighlighter>

            <h4>Graph Depth First Search (Recursive Adjacency List)</h4>

            <p>In the recursive approach with the adjacency list we simply call itself again for each node that is being
                processed and it will
                return once all the nodes are visited. We track the path by a list that we add to on each recursive
                call this list gets mutated on each call recursively so then we get the final ordered result.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] dfsR(int[][] graph) {
         List<Integer> path = new ArrayList<>();
         dfsRecursive(graph, 0, new boolean[graph.length], path);
         return path.stream().mapToInt(Integer::intValue).toArray();
     }
 
     static void dfsRecursive(int[][] graph, int vertex, boolean[] visited, List<Integer> path) {
         path.add(vertex);
         // mark as visited
         visited[vertex] = true;
         // try connections
         int[] connections = graph[vertex];
         // process each connection via dfs
         for(int i = 0; i<connections.length; i++) {
             if(!visited[connections[i]]) {
                 dfsRecursive(graph, connections[i], visited, path);
             }
         }
     }`}</SyntaxHighlighter>

            <p>We have seen with graphs that we can represent them in four different ways, adjacency list, edge list,
                matrix or nodes. We can approach the graph traversal using BFS or DFS and these can be done iteratively
                or recursively. Graphs have the added complexity of cycles within them so we have to track the visited
                vertices and not process them again to stop going into a infinite loop.</p>

            <h4>Graph Interview Questions</h4>

            <p>Questions to ask when looking at graph problems in interviews are?</p>

            <ul className="text-list">
                <li>Does the graph contain cycles? Look in the question it may mention Tree Structure which cannot
                    contain cycles. Or you can ask this question. Think is is possible that a node may have more than
                    one parent? In a directed graph can happen but not be a cycle.
                </li>
                <li>Are there any unconnected parts in the graph? Ask a related sentence to the question if every x is
                    connected or has?
                </li>
                <li>Is the graph weighted?</li>
                <li>Is the graph directed? If it is a tree yes.</li>
                <li>Think of edge cases? Empty graph? Single graph? Ask interviewer if any test case they want to
                    share? Think we can have a heavily weighted single side graph? Like binary tree being a linked list.
                </li>
            </ul>

            <p>An example question for using DFS with a graph is <a
                href={"https://leetcode.com/problems/time-needed-to-inform-all-employees/"}>time needed to inform all
                employees</a>. This question states a manager and the time to inform all its employees who can also be
                managers and have a inform time and so on. We can use DFS and track the max it takes to inform employees
                at a level. Repeating this process and keeping the max only.</p>

            <h4 id={"DAG"}>Directed Acyclic Graph</h4>

            <p>A directed acyclic graph is a graph that has directed edges byt no cycles within it. This type of graph
                can be topologically sorted.</p>

            <h5>Topological Sort</h5>
            <p><strong>In degree value</strong> is the number of edges entering into a vertex. For topological sort to
                work the graph cannot contain cycles as these will not be able to ever have an in degree of 0.</p>
            <p>Topological sort works by taking a node with a 0 degree, adding it to the sorted list of nodes and then
                removing its edges and decreasing the resulting in degree of these removals, repeating this process
                until the graph is sorted in topological order. If there are any remaining vertices then it is not a
                directed acyclic graph. An example can be seen by <a
                    href={"https://www.geeksforgeeks.org/topological-sorting/"}>Geeks for Geeks</a>.</p>

            <p>If a graph does have a cycle it is impossible to reduce the in degree of the vertices in the cycle to
                0.</p>

            <p>The following example of <a href={"https://leetcode.com/problems/course-schedule/"}>Course
                Schedule</a> problem can be solved with topological sort but working out if it can be sorted and if any
                remaining vertices not sorted means they are in a cycle. The algorithm works by creating lists of in
                degree and the adjacency list. We then add the vertices with in degree 0 to the stack to be processed.
                We reduce the connected vertices in degree by 1 when we remove that vertex with degree 0 and repeat the
                cycle. If the number of courses do not match the number of vertices in the sorted list then we know that
                there is a cycle and you cannot complete all courses.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean canFinish(int numCourses, int[][] prerequisites) {
        
        if(prerequisites.length == 0)
            return true;
        
        // degrees
        // adjacency list
        List<Integer> degrees = new ArrayList<>();
        List<List<Integer>> adjacency = new ArrayList<>();
           
        // number of courses
        for(int i = 0; i < numCourses; i++) {
            // set initial degree of zero
            degrees.add(i, 0);
            // add empty array list of adjacency
            adjacency.add(i, new ArrayList<>());
        }
        
        for(int i = 0; i < prerequisites.length; i++) {
            int[] pre = prerequisites[i];
            // add the edge between the vertex and its prerequisite
            adjacency.get(pre[1]).add(pre[0]);
            // increment the degrees in for that vertex
            degrees.set(pre[0],degrees.get(pre[0])+1);
        }
        
        System.out.println("Degree = " + degrees);
        System.out.println(adjacency);
        
        // start with a node with degree 0
        // store the indegrees with a stack
        Deque<Integer> verticesWithZeroDegree = new LinkedList<>();
        
        // add all the zero vertices to stack
        for(int i = 0; i<degrees.size(); i++) {
            if(degrees.get(i) == 0) {
                // add i as vertex
                verticesWithZeroDegree.addFirst(i);
            }
        }
        
        System.out.println(verticesWithZeroDegree);
        
        int count = 0;
        // take the next vertex with in degree zero
        while(!verticesWithZeroDegree.isEmpty()) {
            int vertex = verticesWithZeroDegree.removeFirst(); // O(n)
            // processing a course increment the count
            count++;
            // get adjacent nodes for vertex
            List<Integer> adjacent = adjacency.get(vertex);
            
            for(int edge = 0; edge<adjacent.size(); edge++) { // O(n)
                // next edge
                int next = adjacent.get(edge); 
                // reduce the indegree of next
                // replace the item 
                degrees.set(next, degrees.get(next) - 1);
                System.out.println("Degree for " + next + " " + degrees.get(next));
                if(degrees.get(next) == 0) {
                
                    // if in degree changes to 0 add to stack to be processed
                    // add the vertex
                    verticesWithZeroDegree.addFirst(next);
                    System.out.println(verticesWithZeroDegree);
                }
            }
            
        }
        
        // compare the num of courses and make sure all are processed
        return count == numCourses;
        
    }`}</SyntaxHighlighter>

            <p>Time analysis is <i>O(P+n^2)</i> P is building the adjacency and the degree. The N^2 is due to a worst
                case where a node maybe connected to all other nodes so you iterate the node and all connected nodes.
            </p>

            <h4 id={"weighted"}>Weighted Graph Shortest Path</h4>

            <h4>Dijkstras Shortest Path for Graphs (Greedy)</h4>

            <p>The Greedy paradigm works for optimisation problems and ones which are looking for the maximum or the
                minimum. </p>

            <p>Dijkstras algorithm is a simple algorithm for finding the shortest path tree from source vertex to
                all other vertices in the graph on a weighted graph. It only works when the weights are all non
                negative and the graph is directed and weighted. It works by maintaining two sets one for vertices on
                the
                shortest path and another for vertices not yet included. The second unchecked set starts out with a
                distance of
                infinity for each unchecked vertex. The main step is finding the next shortest vertex from source from
                the set not included yet. We say this is a <strong>greedy</strong> step as it chooses the shortest at
                each selection. It can be implemented using a min heap (Priority Queue) of vertices keyed by their
                weight
                values.</p>

            <p>Lets walk through an example. Say we have a graph of 6 vertices labelled 0 to 5. We are starting at
                vertex 0. We keep a set of vertices to the distance from node 0. At the beginning these are all
                defaulted to infinity. Obviously we can state that node 0 is a distance of 0 from itself so can update
                the distance set for vertex 0 to 0. We then traverse from 0 to each node connected and we set the weight
                in the distance set. For example 0 connects to 1 with a weight of 4 and vertex 2 with a weight of 2. We
                update the distance set with these values. We leave nodes we cannot travel too as infinity. Then which
                node do we move to now we take the greedy approach and move to the node which is the least distance
                away. We then repeat the process of trying to move to each connected node and recording the weight to
                get there including previous weights if already traversed from the starting node and updating from
                infinity. If the recorded distance set has a lower value we leave it. In this example we can traverse
                from vertex 2 to vertex 3 with a weight of 6 inserting into our distance set a distance of 6 + 2 the
                previous vertex weight plus this one and we can also do vertex 4 with a weight of 5 giving a final
                result of 7. We then marked this node
                as fully traversed. We then look in our set of distances and take the next one that is not complete and
                select it. We then traverse again repeating the pattern from this node to each connected node and record
                its distance from the starting node of vertex 0. When traversing other nodes they may have shorter
                distances than those stored in the distance set. If this is the case we update the distance set with
                this new shorter distance.</p>

            <p>If we complete processing all nodes and the distance set contains an infinity still we know that we
                cannot traverse all nodes. Any of the nodes with infinity remaining.</p>

            <ul className="text-list">
                <li>Initialise all distances from the source node to other nodes with infinity and to the source as
                    0. This states they have not been visited yet.
                </li>
                <li>Now select the current node which will be the source to begin. In future iterations it is the
                    closest to source. This can be found with a priority queue.
                </li>
                <li>From the current node update all connected nodes with the distance if shorter to connect to them
                    from the current setting of infinity or its setting from a previous route.
                </li>
                <li>Mark fully visited edges as complete and then continue to select the next shortest unvisited node.
                </li>
                <li>Repeat this process until found the target node or all nodes are visited.
                </li>
            </ul>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    static class Pair {        
        public int target;
        public int weight;
        
        public Pair(int target, int weight) {
            this.target = target;
            this.weight = weight;
        }
        
        @Override
        public String toString() {
            return this.target + ":" + this.weight;
        }
    }
    // Using Dijkstra
    public int networkDelayTime(int[][] times, int n, int k) {
        // dijkstra
        // we choose smallest value from a priority queue (min heap)
        // max value will be the delay
        
        // adjacency list of source node to target and weight pair
        List<List<Pair>> adjList = new ArrayList<>();
        
        // as no negative represent infinity as negative
        // holds the current distances to each node from start
        // zero indexed array so need to shift down vertex indices to store in here
        int[] distances = new int[n];
        // track once we have set all the connected nodes done for 
        boolean[] completed = new boolean[n];
        
        // populate infinity distances
        for(int i = 0; i<n; i++) {
            adjList.add(i, new ArrayList());
            distances[i] = Integer.MAX_VALUE;
        }
        
        // starting node is a distance of 0
        distances[k-1] = 0;
        
        // takes the least weighted distance for each value
        Comparator<Integer> compare = new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                return Integer.compare(distances[a], distances[b]);
            }
        };
        
        PriorityQueue<Integer> priority = new PriorityQueue(compare);
        
        // add the first starting node
        priority.add(k-1);
        
        // populate the adjacency list on times array of source node, target node and the weight
        for(int i = 0; i< times.length; i++) {
            // add value
            int source = times[i][0];
            int dest = times[i][1];
            int weight = times[i][2];
            adjList.get(source-1).add(new Pair(dest-1, weight));
        }
        
        System.out.println(adjList);
        
        while(!priority.isEmpty()) {
            // take the vertex with least priority the smallest distance using the distance array
            int source = priority.poll();
            // get current weight of getting to this node so far
            int sourceWeight = distances[source];
            
            // get connected nodes
            List<Pair> destinations = adjList.get(source);
            
            // iterate each connection 
            for(Pair neighbour: destinations) {
                // calculate the current nodes weight + the new weight to get to this 
                // target node so we get total distance from source node
                int totalDistance = neighbour.weight + sourceWeight;
                // if the new total distance is less than the old 
                // update it
                if(distances[neighbour.target] > totalDistance) {
                    distances[neighbour.target] = totalDistance;
                }
                System.out.println(Arrays.toString(distances));
                // add the next node to priority queue for processing
                // unless we have completed with this node as in we have iterated all its connected nodes
                if(!completed[source]) {
                    priority.add(neighbour.target);
                }
            }
            completed[source] = true;
            
        }
        

        System.out.println(Arrays.toString(distances));
}`}</SyntaxHighlighter>

            <p>The time complexity of the above setting up the adjacency list iterates over the number of edges so we
                have a time complexity <i>E</i>. Every time we shuffle the priority queue the minimum heap it costs <i>Log
                    V</i>. Resulting in a time complexity of <i>V + E * log V</i>. Space with <i>O(E + N)</i> for the
                adjacency list.</p>

            <h5>Dealing with Negative Weights? Bellman Ford</h5>

            <p>We need to use the Bellman Ford Algorithm when finding the shortest path with negative weights. The
                algorithm does not work though if there is a negative cycle. It does allow us to check for negative
                cycles. You complete the bellman ford algorithm for <i>n-1</i> items and then one more and if it
                continues then the graph must have a negative cycle (which can be made up of positive and negative
                weights in the path but with an overall negative weight). This is
                our first dynamic programming solution. Dynamic programming takes the greedy method further by
                understanding we need to investigate every path to find the optimal answer but it also recognises that
                we repeat traversals when checking every possible path. Where we can optimise this repeatable sub
                problem
                of repeated traversals. This is memoization as discussed in the dynamic programming section. The
                algorithm is much simpler than Dijkstra but is slower.</p>

            <ul className="text-list">
                <li>Initialise all distances from the node to infinity and to the source as 0.</li>
                <li>Iterate for the number of vertices - 1 times.</li>
                <li>In the iteration iterate all edges. If the distance from the source node to the target node node can
                    be shortened by taking an edge the distance is updated to the new lower value and stored in the
                    distances list.
                </li>
                <li>Track for each iteration if there has been any updates if none we can break out and finish.</li>
                <li>Since the longest path without cycle is V-1 the edges must be scanned V-1 times.</li>
                <li>A final scan can be performed and if any edges are updated that means that there must be a negative
                    cycle.
                </li>
                <li>The list of distances contains all the shortest distances to each node from the source node.</li>
            </ul>

            <p>The time complexity is <i>O(v*e)</i> with a space complexity of <i>O(v)</i>.</p>

            <p>If there is a negative cycle there is not much you can do.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int bellman(int[][] times, int n, int k) {
        
        // as no negative represent infinity as negative
        // holds the current distances to each node from start
        // zero indexed array so need to shift down vertex indices to store in here
        int[] distances = new int[n];
       
        // init all distances to infinity
        for(int i = 0; i<n; i++) {
            distances[i] = Integer.MAX_VALUE;
        }
        
        // starting node is a distance of 0
        distances[k-1] = 0;
        System.out.println(Arrays.toString(distances));
        
        // iterate code n-1 times for the less times of the number of nodes
        // as the algorithm states
        for(int i = 0; i<n-1; i++) {
            // if no updates we have done this cycle and break as complete
           int updates = 0;
            // iterate all the edges from the times array which is already edge list
           for(int j = 0; j<times.length; j++) {
               // get the nodes and the weight
               int source = times[j][0];
               int target = times[j][1];
               int weight = times[j][2];
               
               // if the source distance add the new weight is less
               // than the distance already for the target then update it
               // subtract 1 as we are zero indexed in distances
               // check first we are not at INT max value (infinity) for the distance so we can traverse it
               if(distances[source-1] != Integer.MAX_VALUE && distances[source-1] + weight < distances[target-1]) {
                   System.out.println(distances[source-1] + " weight: " + weight + " distance:" + distances[target-1]);
                   // We addd the weight of this link to the previous node so we track total distance from source
                   distances[target-1] = distances[source-1] + weight;
                   updates++;
               }
           } 
            // no new updates we are done
            if(updates == 0) break;
        }
        
        int min = -1;
        
        System.out.println(Arrays.toString(distances));
        // take the max value from the arry
        for(int i = 0; i<distances.length; i++) {
            System.out.println(distances[i]);
            if(distances[i] == Integer.MAX_VALUE) {
                // cannot traverse all paths not updated the length
                return -1;
            }
            
            // take the max value of the distances which is the minimum
            min = Math.max(distances[i], min);
            System.out.println("Min:" + min + " " + distances[i]);
        }
        
        return min;
        
    }`}</SyntaxHighlighter>

            <table>
                <tr>
                    <th>Algorithm</th>
                    <th>Restriction</th>
                    <th>Typical</th>
                    <th>Worst Case</th>
                    <th>Extra Space</th>
                </tr>
                <tr>
                    <td>Dijkstra</td>
                    <td>Only for positive weights</td>
                    <td>E Log V</td>
                    <td>E Log V</td>
                    <td>V</td>
                </tr>
                <tr>
                    <td>Topological Sort</td>
                    <td>Edge weighted DAG</td>
                    <td>E+V</td>
                    <td>E+V</td>
                    <td>V</td>
                </tr>
                <tr>
                    <td>Bellman Ford (Queue Based)</td>
                    <td>No negative cycles</td>
                    <td>E+V</td>
                    <td>VE</td>
                    <td>V</td>
                </tr>
            </table>

            <br></br>

            <h4 id={"trie"}>Retrieval Trees (Trie)</h4>
            <p>Trie trees are commonly used data structure for storing commonly strings as trees and making them
                searchable and insert in <i>O(m)</i> time where m is the length of the string. The space complexity is
                going to
                be <i>O(N*K)</i> where the N is the node size multiplied by the number of characters in alphabet as each
                character is stored. The space of a single word is <i>O(m)</i>. We keep a Tree starting with
                a empty root. Then we keep all children in the alphabet to this root so in the english language 26
                children to root. Each node is then made up of its character in the alphabet and its children which
                could be any of the 26 letters. To search for a word you start at the root and then navigate through
                each letter and letters in children until you terminate or reach the end of the words. Here you can
                see
                how auto complete can make suggestions for you for finishing word spellings.</p>

            <p>The below solution uses a MAP to store the characters we can optimise this and use a fixed size array to
                store the alphabet.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`class Trie {

    private TrieNode root = new TrieNode();
    
    static class TrieNode {
        // Could do this as a list of characters
        private Map<Character,TrieNode> children = new HashMap<>();
        
        // end of a word
        private boolean isEndOfWord;

        public TrieNode() {
            this.isEndOfWord = false;
        }
        
        public boolean containsKey(char letter) {
            return this.children.containsKey(letter);
        }
        
        public TrieNode get(char letter) {
            return this.children.get(letter);
        }
        
        public void put(char letter, TrieNode node) {
            this.children.put(letter, node);
        }
        
        public void setEndOfWord() {
            this.isEndOfWord = true;
        }
        
        public boolean isEndOfWord() {
            return this.isEndOfWord;
        }
        
    }
    
    public Trie() {
        
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for(int i = 0; i<word.length(); i++) {
            if(current.containsKey(word.charAt(i))) {
                current = current.get(word.charAt(i));
            } else {
                TrieNode newNode = new TrieNode();
                // insert a new node
                current.put(word.charAt(i), newNode);
                // return this new node as the next
                current = current.get(word.charAt(i));
            }
        }
        // final letter so is end of word
        current.setEndOfWord(); 
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode current = this.root;
        for(int i = 0; i<word.length(); i++) {
            if(current.containsKey(word.charAt(i))) {
                current = current.get(word.charAt(i));
            } else {
                return null;
            }
        }
        
        return current;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord();
    }
    
    public boolean startsWith(String prefix) {
        TrieNode node = searchPrefix(prefix);
        return node != null;
    }
}`}</SyntaxHighlighter>

            <p>A further optimised TrieNode that uses fixed length alphabet arrays can be seen as below.</p>
            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static class TrieNode {
        // Could do this as a list of characters
        private static final int ALPHABET_SIZE = 26;
        private TrieNode[] children;
        
        // end of a word
        private boolean isEndOfWord;

        public TrieNode() {
            this.isEndOfWord = false;
            this.children = new TrieNode[ALPHABET_SIZE];
        }
        
        public boolean containsKey(char letter) {
            return this.children[letter-'a'] != null;
        }
        
        public TrieNode get(char letter) {
            return this.children[letter - 'a'];
        }
        
        public void put(char letter, TrieNode node) {
            this.children[letter-'a'] = node;
        }
        
        public void setEndOfWord() {
            this.isEndOfWord = true;
        }
        
        public boolean isEndOfWord() {
            return this.isEndOfWord;
        }
        
    }
`}</SyntaxHighlighter>

        </div>
    ]
}

const Graphs = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Graphs;