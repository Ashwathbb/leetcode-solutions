
// Explanation:
// We start assuming the entire first string is the prefix.

// For each following string, we check if it starts with the current prefix.

// If not, shorten the prefix by removing one character from the end.

// Repeat until all strings "start with" the prefix or prefix becomes empty.
//note: node 14_Longest_Common_Prefix.js

function longestCommonPrefix(strs1){
    if(strs1.length === 0) return "";

      let prefix = strs[0];
  
  for (let i = 1; i < strs1.length; i++) {
    while (strs1[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
}


console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // Output: ""
console.log(longestCommonPrefix(["interstellar", "internetv", "internal", "interval"])); 
