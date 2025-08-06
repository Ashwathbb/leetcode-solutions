1. [Two Sum](two-sum.js)  
   - **Difficulty**: Easy  
   - **Array**:
            * @param {number[]} nums
            * @param {number} target
            * @return {number[]}
            */
            var twoSum = function(nums, target) {
                for (let i=0; i<nums.length;i++){
                    for(let j=i+1;j<nums.length;j++){
                        if(nums[i]+nums[j]=== target){
                            return [i,j];
                        }
                    }
                }
            };
            const nums = [3, 2, 4];
            const target = 6;
            console.log(twoSum(nums, target)); 


   - **Approach**:
     Our task:
                Find two numbers in nums that add up exactly to target
                Return the indices of these two numbers in the array
                There will be exactly one solution
                You cannot use the same element twice
                Return the indices in any order

        -**Understanding with an example**
            Given nums = , target = 9
            We want to find two numbers that add to 9.
            nums = 2 and nums = 7 → 2 + 7 = 9
            So, the answer is.

       - **Brute force approach:**:

            Try every pair (i, j)in the array:
            Check if nums[i] + nums[j] == target
            If yes, return [i, j]
            This takes O(n²) time since you check all pairs.


2.[Longest Common Prefix](14_Longest_Common_Prefix.js)

    --> Problem Recap:
                    Given an array of strings, find the longest common prefix shared among all the strings.
                    If no common prefix exists, return an empty string ""
    --> Approach (Horizontal Scanning):
            1) Start with the prefix as the first string in the array.
            2) Compare this prefix with the next string.
            3) Update the prefix to the common prefix between the current prefix and that string.
            4) Repeat this for all strings.
            5) If at any point the prefix is empty, return "".
    --> Example:
            Input: ["flower", "flow", "flight"]
            Start prefix = "flower"
            Compare with "flow", common prefix = "flow"
            Compare "flow" with "flight", common prefix = "fl"
            Return "fl"
    --> code:
            function longestCommonPrefix(strs) {
                if (strs.length === 0) return "";
                
                let prefix = strs[0];
                
                for (let i = 1; i < strs.length; i++) {
                    while (strs[i].indexOf(prefix) !== 0) {
                    prefix = prefix.substring(0, prefix.length - 1);
                    if (prefix === "") return "";
                    }
                }
            
            return prefix;
            }  