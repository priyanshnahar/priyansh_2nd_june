// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// const aaaaa = "A man, a plan, a canal: Panama";
// console.log("AmanaplanacanalPanma".toLowerCase());

var isPalindrome = function (s) {
  let arr = ["A man, a plan, a canal: Panama"];
  return arr(arr.join(" "));
};

let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let str = s.toLowerCase().replaceAll(/[_\W]/, "");
  return str.split("").reverse().join("") === str;
};

console.log(s);
