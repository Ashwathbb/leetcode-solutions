
// Explanation:
// We start assuming the entire first string is the prefix.

// For each following string, we check if it starts with the current prefix.

// If not, shorten the prefix by removing one character from the end.

// Repeat until all strings "start with" the prefix or prefix becomes empty.
//note: node 14_Longest_Common_Prefix.js

function longestCommonPrefix(strs){
  // first we need to check the array is empty or not if it is empty just return null
  if (strs.length === 0) return "";

  //if we have data so then consider first element as lonegest prefix then comapre
  let prefix = strs[0];
  
  //then first element is i=0 is prefix next elemnt is i=1;
  for(let i=1; i<strs.length; i++){
    while(strs[1].indexOf(prefix) !==0){
      //it means suppose the preifx is flower is bigger than and not match to flow then reduce 

      prefix = prefix.substring(0, prefix.length-1);

      // in that time if prefix is empty return null
      if(prefix.length === 0) return ""
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // Output: ""
console.log(longestCommonPrefix(["interstellar", "internet", "internal", "interval"])); 
