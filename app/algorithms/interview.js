import React from 'react';
import BlogPage from "../blog-page";
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Algorithms for Interviews',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#Array"}>Array</Link></li>
                <ul className="text-list">
                    <li><Link to={"#2sum"}>Two Sum</Link></li>
                    <li><Link to={"#2sum2"}>Two Sum Two</Link></li>
                    <li><Link to={"#3sum"}>Three Sum</Link></li>
                    <li><Link to={"#permutations"}>Permutations</Link></li>
                    <li><Link to={"#meeting"}>Meeting Rooms 1</Link></li>
                    <li><Link to={"#meeting2"}>MeetingRooms 2</Link></li>
                    <li><Link to={"#scheduling"}>Scheduling Intervals</Link></li>
                    <li><Link to={"#subarraysum"}>Subarray Sum = K</Link></li>
                    <li><Link to={"#container"}>Containers with Most Water</Link></li>
                    <li><Link to={"#trapping"}>Trapping Rainwater</Link></li>
                    <li><Link to={"#subsets"}>Find all subsets of the input array (Power Set)</Link></li>
                    <li><Link to={"#kth"}>Find Kth Element</Link></li>
                    <li><Link to={"#median"}>Median of two Sorted Arrays</Link></li>
                    <li><Link to={"#jump"}>Jump Game</Link></li>
                </ul>
                <li><Link to={"#String"}>Strings</Link></li>
                <ul className="text-list">
                    <li><Link to={"#"}></Link></li>
                    <li><Link to={"#"}></Link></li>
                    <li><Link to={"#"}></Link></li>
                    <li><Link to={"#"}></Link></li>
                    <li><Link to={"#"}></Link></li>
                </ul>
            </ul>

            <h3 id={"Array"}>Array</h3>

            <p>Tips for working with array questions are can we use pointers, can we iterate through it in reverse, can
                we use extra storage to make the problem easier.</p>

            <h4 id={"2sum"}>Two Sum</h4>

            <p>The <a href={"https://leetcode.com/problems/two-sum/"}>Two Sum</a> problem is a classic starting point.
                It covers many of the steps required to get a brute force solution then optimise it. Remember, read the
                question, ask questions, think of test cases, think of edge cases, then think of a brute force, then try
                and optimise.</p>

            <p>There are a few solutions to this problem, if the data is not sorted then the best choice is to use a
                Dictionary to store the complementary values required and then continue iterating the list and checking
                if the complementary value is in the list. This extra space of <i>O(n)</i> allows a running time
                of <i>O(n)</i>. The complementary value is the <i>target - nums[i]</i>. Then if that value is in the
                rest of the list we know we have the two values to form the sum.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] twoSum(int[] nums, int target) {
        // Holds the complement to the seen numbers to get the target
        Map<Integer,Integer> complement = new HashMap<>();
        
        for(int i = 0; i<nums.length; i++) { 
            if(complement.containsKey(nums[i])) {
                return new int[]{complement.get(nums[i]), i};
            } else {
                int numberToFind = target - nums[i];
                System.out.println("Putting " + numberToFind);
                complement.put(numberToFind, i);
            }
            
        }
        
        return new int[0];
    
    }`}</SyntaxHighlighter>

            <h4 id={"2sum2"}>Two Sum Two</h4>

            <p>The <a href={"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"}>Two Sum Two</a> problem
                is the same as above but the array is already sorted. This enables us to
                use the two pointer approach, where we start on the widest possible pointers on the left and right side.
                Then we calculate the sum. If the sum is larger than the target we decrement the right pointer, and if
                it is less than the target we increment the right pointer. Until they find a target of they overlap.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] twoSum(int[] numbers, int target) {
        int leftPtr = 0;
        int rightPtr = numbers.length-1;
        
        while(leftPtr < rightPtr) {
            int sum = numbers[leftPtr] + numbers[rightPtr];
            
            if(target == sum) {
                // add one as returning position
                return new int[]{leftPtr+1, rightPtr+1};
            } else if(sum < target) {
                leftPtr++; // if sum is less than target move left ptr only
            } else {
                rightPtr--;
            }
        }
        
        return new int[0];
    }`}</SyntaxHighlighter>

            <h4 id={"3sum"}>Three Sum</h4>
            <p>The <a id={"https://leetcode.com/problems/3sum/"}>Three Sum</a> problem is a bit trickier but we can take
                what we learned from the two sum. This problem requires us to find a target of zero. It also says do not
                return duplicate solutions. To overcome this we can sort the array. Then iterate through it if the
                current value at the current index is greater than zero we break from loop as the remaining ordered
                values cannot form zero. Otherwise we call the two sum with two pointers approach as the list is sorted.
                The two sum function sets the left pointer to the current index + 1, and the right pointer always as the
                last value in the array. We calculate the sum as <i>int sum = nums[index] + nums[leftPtr] +
                    nums[rightPtr];</i> then we check and increment and decrement as appropriate or add to the result if
                matches. When adding to the result we move both pointers and then skip any duplicates from the left
                pointer.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<List<Integer>> threeSum(int[] nums) {
        // Pre sort to deal with duplicates
        Arrays.sort(nums);
        
        List<List<Integer>> res = new ArrayList<>();
        
        // O(n^2)
        // break from loop if the value is greater than zero
        for(int i = 0; i<nums.length && nums[i] <= 0; i++) {            
            // if first or non duplicate
            if(i == 0 || nums[i-1] != nums[i]) {
                twoSum(nums, i, res, 0);
            }
            
        }
       
        return res;
    }
    
    //[-4,-1,-1,0,1,2]
    
    public void twoSum(int[] nums, int index, List<List<Integer>> res, int target) {
        // left ptr is next item
        int leftPtr = index + 1;
        // right ptr is always the last
        int rightPtr = nums.length-1;
        
        while(leftPtr < rightPtr) {
            // sum the three values with fixed index
            int sum = nums[index] + nums[leftPtr] + nums[rightPtr];
            
            if(sum > target) {
                // move ptr inward to make result smaller
                rightPtr--;
            } else if(sum < target) {
                leftPtr++;
            } else {
                // Found triplet add to result
                res.add(Arrays.asList(nums[index], nums[leftPtr], nums[rightPtr]));
                
                // move the values to keep searching
                leftPtr++;
                rightPtr--;
                
                // increment left ptr until we have not just moved to a duplicate
                while(leftPtr < rightPtr && nums[leftPtr] == nums[leftPtr - 1]) {
                    leftPtr++;
                }   
            }   
        }
    }`}</SyntaxHighlighter>

            <h4 id={"permutations"}>Permutations (Order Matters)</h4>

            <p>The question is from <a href={"https://leetcode.com/problems/permutations/"}>leetcode</a>. We are
                required to print all permutations of an array. This can be solved recursively and with backtracking. A
                video that explains this well is <a
                    href={"https://www.youtube.com/watch?v=GuTPwotSdYw&ab_channel=TECHDOSE"}>here</a>. The approach is
                fairly simple you start with the first character in the string and swap with the next character (ABC ->
                BAC) then
                recursively call the function on this new string (BAC), then revert back the string (BAC -> ABC) and
                repeat the process
                with the first character and the third character (ABC -> CBA). The code below shows how to achieve this.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// O(n!) as its the depth of the tree (n * n!) == (time to print one permutation * number of permutations)
    // O(n!) space as its the stack
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> permutations = new ArrayList<>();
        permutate(nums, 0, nums.length, permutations);
        return permutations;
    }
    
    private void permutate(int[] nums, int left, int right, List<List<Integer>> permutations) {    
        // when we have the left ptr at the end so fixed all the values we add to result
        if(left == right) {
            System.out.println(Arrays.toString(nums));
            permutations.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
        }
        
        // iterate each character in string from left to right ptr
        // will fix the ones left of the left pointer
        for(int i = left; i<right; i++) {
            swap(nums, left, i); // ABC swap A and B to BAC
            // increment left as want permutations to right of fixed value
            permutate(nums, left+1, right, permutations);
            // backtrack and rearrange back from swap to original ABC to calculate
            swap(nums, left, i);
        }
        
    }
    
    private void swap(int[] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }`}</SyntaxHighlighter>

            <p>This same approach can be applied to strings as in the next section for strings.</p>

            <h4 id={"meeting"}>Meeting Rooms 1</h4>

            <p>A simple problems that involves sorting an array by start time of meetings and checking for overlaps in
                meeting rooms end and start time. <a href={"https://leetcode.com/problems/meeting-rooms/"}>Meeting
                    rooms</a> problem easy.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean canAttendMeetings(int[][] intervals) {
        // sort by start time and 
        // check if an overlap between start of next one and end of previous
        
        Arrays.sort(intervals, (time1, time2) -> Integer.compare(time1[0], time2[0]));
        
        for(int i = 1; i<intervals.length; i++) {
            // if end of first is greater than second start
            if(intervals[i-1][1] > intervals[i][0]) {
                return false;
            }
        }
        
        return true;
    }`}</SyntaxHighlighter>

            <h4 id={"meeting2"}>MeetingRooms 2</h4>

            <p><a href={"https://leetcode.com/problems/meeting-rooms/"}>Meeting
                rooms two</a> problem is a medium and is a bit harder than the one above as you start with sorting the
                input schedule by start time as before. Then we need to track the next minimum end time to count how
                many overlap and how many rooms are required. We can use a minimum heap (default implementation for
                Java) to track the end times so we know that the next earliest end time is the top of the heap. Then pop
                it if we have a meeting with a later start time otherwise add it to the heap and increment the room
                count.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// Sort by the start time
        Arrays.sort(intervals, (time1, time2) -> Integer.compare(time1[0], time2[0]));
        
        int numberOfRooms = 0;
        
        // default priority queue is minimum
        Queue<Integer> minEndTime = new PriorityQueue<>();
        
        // iterate over each start and end time
        // check if the start time is less than equal to start 
        // then add time or increment rooms as meeting still going
        for(int[] time: intervals) {
            int startTime = time[0];
            int endTime = time[1];
            
            // have a room smaller so pop it and add
            if(minEndTime.peek() != null && minEndTime.peek() <= startTime) {
                minEndTime.poll();
                minEndTime.add(endTime);
            } else {
                // not smaller so we need a room
                numberOfRooms++;
                minEndTime.add(endTime);
            }
        }
        
        return numberOfRooms;
        
    }`}</SyntaxHighlighter>

            <h4 id={"scheduling"}>Two City Scheduling</h4>

            <p>The question is from <a href={"https://leetcode.com/problems/two-city-scheduling/"}>leetcode</a>. Where
                we are tasked with finding out the most efficient way to schedule interviews between two cities with
                associated costs. It is a greedy problem. The solution involves breaking down the differences for each
                person to travel to city A vs city B. We do this by subtracting the cost of city B from city A costs.
                (We could reverse this if we wanted to change order). This then orders the costs of going to city A over
                city B. We can sort the array that is input by this then the starting n persons in the sorted array
                should go to city A and the rest to city B. A greedy approach as we want to keep the cost of going to
                city A small and choose the smallest.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int twoCitySchedCost(int[][] costs) {
        // now we sort by the biggest savings being greedy so the smallest values are the best for city A
        // if we do a - b times then we take the start of the list and send to city A. 
        // If we did b - a then the start of the list would be for city B first and reverse the logic
        
        // 10-20 = -10
        // 30-200 = -170
        // 400-50 = 350
        // 30-20 = 10 
        // ^^ these are put into sorted order for the best case going to city A
        
        Arrays.sort(costs, (o1, o2) -> Integer.compare(o1[0] - o1[1], o2[0] - o2[1]));
        
        int n = costs.length/2;
        
        int totalCost = 0;
        
        for(int i = 0; i<costs.length; i++) {
            System.out.println(costs[i][0]+","+costs[i][1] + "=" + (costs[i][0] - costs[i][1]));
            
            // Lowest values sorted go to City A
            if(i < n) {
                totalCost += costs[i][0];
            } else {
                // Higher values in sorted list go to City B
                totalCost += costs[i][1];
            }
        }
        
        return totalCost;
        
    }`}</SyntaxHighlighter>

            <h4 id={"subarraysum"}>Subarray Sum = K</h4>

            <p>A straightforward problem for a brute force solution. <a
                href={"https://leetcode.com/problems/subarray-sum-equals-k/"}>Subarray sum equals K</a> problem medium.
                To make this <i>O(n^2)</i> linear we can use extra storage with a table storing the current sums seen so
                far to the frequencies. This enables us to do a check where we subtract the latest sum from K seen if
                its in the table and then we know we can sum it back to the sum and the number of times we can do this
                is the frequency count in the value of the table. This gives a <i>O(n)</i> solution for time and space.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int subarraySum(int[] nums, int k) {
        // Holds the sums seen so far and the frequency of those sums
        Map<Integer, Integer> sumToFreq = new HashMap<>();
        int count = 0;
        int sum = 0;
        
        // we have seen the sum of zero once at start by default
        sumToFreq.put(0, 1);
        
        // iterate each item 
        // check if the sum - k exists as a key in the map if so increment the sub array possible
        // and put sum in map
        for(int i = 0; i<nums.length; i++) {
            sum += nums[i];
            if(sumToFreq.containsKey(sum - k)) {
                count += sumToFreq.get(sum - k); // add the current count that matches
            }
            sumToFreq.put(sum, sumToFreq.getOrDefault(sum, 0) + 1); // keep freq as can sum multiple times
                
        }
        
        return count;
    }`}</SyntaxHighlighter>

            <h4 id={"container"}>Container with Most Water</h4>

            <p>This <a
                href={"https://leetcode.com/problems/container-with-most-water/"}>problem</a> requires us to find the
                container that holds the most water when provided an array that represents a graph. This graph allows
                capturing water. A brute force solution is to take each point in array and compare its min height with
                every other point multiplied by their width to find the max area. <i>O(n^2)</i>. An optimal solution is
                the two shifting pointer technique. This approach runs in <i>O(n)</i> time. It works by having a pointer
                at the start and at the end. We then calculate the max area by taking the minimum of the left and right
                side values provided in the array and then subtracting right from left to find the width. Multiply these
                for the area. We then keep the previous max or the new max area. <i>maxArea = Math.max(maxArea,
                    Math.min(left, right) * width);</i>. After this we move in the smaller of the left or right values
                incrementing or decrementing the related pointers and repeat.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int maxArea(int[] height) {
        int maxArea = 0;
        
        int leftPtr = 0;
        int rightPtr = height.length-1;
        
        while(leftPtr < rightPtr) { 
            int left = height[leftPtr];
            int right = height[rightPtr];
            
            int width = rightPtr - leftPtr;
            
            // take the min height of the left or right side
            maxArea = Math.max(maxArea, Math.min(left, right) * width);
            
            // take smallest side and move in
            if(left <= right) {
                leftPtr++;
            } else {
                rightPtr--;
            }    
        }
        
        return maxArea;
    }`}</SyntaxHighlighter>

            <h4 id={"trapping"}>Trapping Rainwater</h4>

            <p>This <a
                href={"https://leetcode.com/problems/trapping-rain-water/"}>problem</a> requires us to trap rain water
                but this time we have the array representing a bar chart where we can have different heights in the
                chart which results in capturing different levels of rain water. A formula to calculate this from any
                point in the array is <i>take max left side and max right side take the minimum of the two then subtract
                    the current pointer height and will result in how much water this particular point can hold.</i> In
                a formula <i>currentWater = min(maxLeft, maxRight) - currentHeight</i>. This gives us a <strong>brute
                    force</strong> solution where we iterate through each point and try the formula adding to the total
                water. This is <i>O(n^2)</i>.
            </p>

            <p><strong>Optimal solution</strong> to improve on this we can use the two pointer technique. With the
                following steps we identify the pointer left or right with the lowest value. We also track the max of
                each side if the pointer value is greater than or equal to the max of that side yes we update max on
                that side. If not then get the subtract that value from the minimum which is the pointer on that side.
                Move the pointer inward and repeat.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`
    // optimal solution
// 2 ptr approach
// 1) Identify ptr with lesser value
// 2) is ptr great than or equal to max of that side? 
// yes -> update max on that side
// no -> get water for ptr value and add on total
// move ptr inward
// repeat for other ptr                           
    public int trap(int[] height) {
        int total = 0;
        
        int leftPtr = 0;
        int rightPtr = height.length-1;
        
        int maxLeft = 0;
        int maxRight = 0;
        
        while(leftPtr < rightPtr) {
            if(height[leftPtr] <= height[rightPtr]) {
                if(height[leftPtr] >= maxLeft) {
                    maxLeft = height[leftPtr];
                } else {
                    total += maxLeft - height[leftPtr];
                }
                leftPtr++;
            } else {
                if(height[rightPtr] > maxRight) {
                    maxRight = height[rightPtr];
                } else {
                    total += maxRight - height[rightPtr];
                }
                rightPtr--;
            }
        }
        
        return total;

    }`}</SyntaxHighlighter>

            <h4 id={"kth"}>Kth Element</h4>

            <h4 id={"subsets"}>Find all subsets of the input array (Power Set)</h4>
            <p>We are required to find all subsets of the input array, the empty set is always a subset. The number of
                subsets will be <i>2^n</i>. The question is from <a
                    href={"https://leetcode.com/problems/subsets/"}>leetcode</a></p>

            <p>The solution can be found by iterating over each item in the array. For each iteration add the value to
                the subset and then recursively explore the elements with this starting value and the position of the
                rest of the array starting from this index + 1. Then remove the index item from the subset and move to
                the next index in the array and repeating the process.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// Start with an empty subset and start at index 0
    // then iterate each item in nums and add to subset and recursively call it
    // then remove the last added item and repeat the process
    // so we get [], [1], [2], [1,2] [3], [1,3], [2,3], [1,2,3]
    
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> results = new ArrayList<>();
        
        subset(new ArrayList<Integer>(), results, nums, 0);
        
        return results;
    }
    
    private void subset(List<Integer> subset, List<List<Integer>> results, int[] nums, int start) {
      
        // add the previous subset starts with empty then [1] then [2]
        results.add(new ArrayList(subset));
        
        // start from next position
        for(int i = start; i<nums.length; i++) {
            // incrementally add each item from the list to the subset
            // so 1 
            subset.add(nums[i]);
            
            // recursively call with the subset so it grows from 1 to 2
            subset(subset, results, nums, i+1);
            
            // remove last item from subset so we then go from 1 to empty
            // then we repeated above starting with 2
            subset.remove(subset.size()-1);
        }
        
    }`}</SyntaxHighlighter>

            <h4 id={"median"}>Finding the Median of two sorted arrays</h4>

            <p>A question from <a href={"https://leetcode.com/problems/median-of-two-sorted-arrays/"}>leetcode</a>. We
                are tasked with finding the median of two sorted arrays. These arrays can be of a different length. We
                cannot merge and sort the arrays. The median is the middle value in a sorted array if the array is of
                even length we take the midpoint between the two middle numbers so we add them and divide by two.</p>

            <h4 id={"jump"}>Jump Game</h4>
            <p>A question from <a href={"https://leetcode.com/problems/jump-game/"}>leetcode</a>. Given an array of
                integer nums, positioned at the first index where each element in the array means the max amount you can
                jump forward. Return true if you can reach the last index. We can look at this with a greedy approach.
                Starting from the last index we can look at the last - 1 position and see if we can make it to the last
                from there. Repeating this step moving backwards can we make it to the next position that is true
                shortening the criteria. We move the goal back on each successful index from the end we have found. This
                is repeated if we cannot reach the goal from that index the goal remains where it is and we continue on.
                To check we need to consider the starting index (see code comments) to be included in where we are at in
                addition to the element data for that index so we include where in the array we are in comparison to the
                goal. This solution is <i>O(n)</i> for time and <i>O(1)</i> for space.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean canJump(int[] nums) {
     
        // end goal we need to get to this index
        int goal = nums.length-1;
        
        for(int j = nums.length-1; j>=0; j--) {
            // only updates if we can reach the goal 
            // we add the current index and the value as we are trying to 
            // reach from that index as we are closer so say we are at index 4
            // we need to get to index 5 so we only need 1 so it be (index + nums[index])
            // but say we are at index 0 trying to get to index 5 then we need to jump
            // 5
            if(j + nums[j] >= goal) {
                // we set the goal as the index if we can reach it from this index
                // otherwise its not set and we continue on trying from other positions
                goal = j;
            }
        }
        
        
        return (goal == 0) ? true : false;
        
    }`}</SyntaxHighlighter>

            <h3 id={"String"}>Strings</h3>

            <h4>Manipulating Chars</h4>

            <p>Chars are represented by their encoding table. Therefore you can manipulate chars by incrementing or
                decrementing them within the bounds of your alphabet. You can say if it is less than a or greater than
                z either plus 26 or subtract it. For example.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`
char z = 'z';
System.out.println("z=" + (int)z);

z += 3;
if(z > 'z') {
    z = (char)((int)z - 26);
}

System.out.println("Z rotated = " + z);

//Z=122
//Z rotated = c=99
                               `}</SyntaxHighlighter>

            <p>If we take the starting char of a. Then increment it beyong the alphabet we get the next encoded
                character as show below.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`char a = 'a';
        a+=25;
        // max char if we go over it will overflow
        System.out.println("a+25=" + a);
        // we would get {
        a++;
        System.out.println("a+26=" + a);
        // a+25=z
        // a+26={
        `}</SyntaxHighlighter>

            <h4>Rotate Cipher</h4>
            <p>A common cipher approach is to rotate all characters by a rotation number. For example in a word rotate
                each
                character by 3.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public static String rotateAnyCase(String a, int rotation) {
         StringBuilder sb = new StringBuilder();

         for(int i = 0; i<a.length(); i++) {
             char current = a.charAt(i);
             // do the integer increment to rotate it
             current = current += rotation;
             // if it is greater than z then restart it from the alphabet
             if(current > 'z' || current > 'Z') {
                 current = (char)((int) current - 26);
             }
             // add proper string to builder
             sb.append(current);
         }

         return sb.toString();

     }

//abc rotated = def
`}</SyntaxHighlighter>

            <h4>Typed Out Strings</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>

            <h4>Permutations (Backtracking)</h4>

            <p>A great resource on finding permutations is <a
                href={"https://www.youtube.com/watch?v=GuTPwotSdYw&ab_channel=TECHDOSE"}>tech
                dose</a>. This approach can be applied to any array a more efficient string one does exist but we remain
                happy with this.</p>

            <p>We focus on the recursive here. This approach uses backtracking where we swap each of the remaining
                characters in the string with the first character then generating all remaining rest of the strings
                using recursive calls. The recursive call terminates when we have processed all the remainders.</p>

            <p>For example for ABC. First take the first character A and swap with next character ABC -> BAC. Then move
                to the next character and repeat this process. With a final result of [ABC, ACB, BAC, BCA, CAB, CBA]. We
                always back track to original string from BAC -> ABC so we can then swap A and C to apply to CBA.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static List<String> permutate(String str) {
         List<String> permutations = new ArrayList<>();
         permutate(str.toCharArray(), 0, str.length(), permutations);
         return permutations;
     }

     static void permutate(char[] input, int left, int right, List<String> permutations) {
         // Done the prefix now its empty we have the final permutation so add to result
         if(left == right) {
             permutations.add(new String(input));
             return;
         } else {
             // iterate and permutate each prefix
             for(int i = left; i<right; i++) {
                // swap characters start ptr and the current swap to right
                swap(input, left, i);
                 // move to next character and permutate leave first fixed pass in full lenght of original string
                 // as we always iterate over each character till its end
                permutate(input, left+1, right, permutations);
                // backtrack and swap back
                swap(input, left, i);
             }
         }
     }

     static void swap(char[] input, int left, int right) {
         char tmp = input[left];
         input[left] = input[right];
         input[right] = tmp;
     }`}</SyntaxHighlighter>

            <h4>Generating Parentheses (Backtracking)</h4>

            <p>A common question is <a href={"https://leetcode.com/problems/generate-parentheses/"}>generate
                parentheses</a> that are all valid combinations. This problem is again solved using the backtracking
                approach. For this question we need to think what is a valid result, and this is where the open
                parenthesis match the closed and the size of the final string is 2 times the number of combinations to
                generate. This is the base case for the recursive algorithm. We use a string builder
                like a stack where we add an opening bracket if it is less than the number of parentheses, then call the
                function again and back track by removing the parenthesis. We then continue on and add the closing
                parenthesis if its count is less than the opening.</p>

            <p>This process is repeated forming a break down tree where the leaves are all the final combinations of
                valid parentheses. This gives a time complexity of <i>O(4^n / sqrt(n))</i></p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<String> generateParenthesis(int n) {
        
        List<String> result = new ArrayList<>();
        // We track this as we can only add
        // a closing bracket if we add a open first
        int open = 0;
        int closed = 0;
        
        StringBuilder sb = new StringBuilder();
        
        backTrack(open,  closed, n, result, sb);
        
        return result;
    }
    
    private void backTrack(int open, int closed, int n, List<String> result, StringBuilder sb) {
        // base case the length of the string is at the expected size
        if(sb.length() == n * 2) {
            result.add(sb.toString());
            return;
        }
        
        if(open < n) {
            sb.append("(");
            backTrack(open + 1, closed, n, result, sb);
            sb.deleteCharAt(sb.length()-1); //backtrack
        }
        
        // if closed is less than open
        if(closed < open) {
            sb.append(")");
            backTrack(open, closed + 1, n, result, sb);
            sb.deleteCharAt(sb.length()-1); //backtrack
        }
        
    }`}</SyntaxHighlighter>

            <h4>Longest Substring without Repeating Characters</h4>
            <h4>Valid Palindrome</h4>

            <p>For finding a palindrome we can start from the outside of the string with two pointers then increment
                inward and check if they are equal. If they are equal all the way to the where the left and the right
                pointer meet then this is a valid palindrome.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static boolean isPalindromeTwoPtrs(String s) {
        if(s.length() == 1) return true;
        int left = 0;
        int right = s.length()-1;
        
        // start from outside in as we want to detect if immediately
        // until they are equal positions
        while(left < right) {
            System.out.println(left + "->" + right);
            // we move out from the centre and if they dont match its not a palindrome
            if(s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }`}</SyntaxHighlighter>

            <h4>Almost Palindrome</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean validPalindrome(String s) {        
        int start = 0;
        int end = s.length()-1;
        
        while(start < end) {
            if(s.charAt(start) != s.charAt(end)) {  
                // we check if the updated is a palindrome and return so we can only check once
                return (isPalindrome(s, start+1, end) || isPalindrome(s, start, end-1));
            }
            start++;
            end--;
        }
        
        return true;
    }
    
    // we dont need to delete just move the one index and check if still palindrome
    public boolean isPalindrome(String s, int start, int end) {
        //System.out.println("checking if palindrome " + s);
        
        while(start < end) {
            if(s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        
        
        return true;
    }`}</SyntaxHighlighter>
            <h4>Longest Palindrome Substring</h4>

            <p><a href={"https://leetcode.com/problems/longest-palindromic-substring/solution/"}>Longest Palindome
                Substring LeetCode</a>.
                For odd and even palindrome we have to call findPalindrome twice one for the starting pointers on same
                index for odd length strings and one for when they start on different indexes for even length strings.
                We iterate over each character in the array call findPalindrome where we start at the pointers of left
                and right and expand out. We take the max of the two results. We take this result if its new length is
                bigger than the previously seen longest palindrome.
            </p>

        </div>
    ]
}

const Interview = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Interview;