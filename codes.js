/*count down from 5 */
function countdown(n){
  if (n === 0) {
    return;
  }
  console.log(n);
  countdown(n-1);
}
countdown(5);

function first() {
    second();
    console.log("First");
}

function second() {
    third();
    console.log("Second");
}

function third() {
    console.log("Third");
}

first();

function count(n) { if (n === 0) { return; }
console.log("Calling:", n);
count(n - 1);
console.log("Returning:", n);
}
count(3);

/*reverse string*/

function reverseString(str) {
  if (str === ""){
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));

/*palindrome*/

function isPalindrome(str) {
// Base case
if (str.length <= 1) {
    return true;
}
if (str[0] !== str[str.length - 1]) {
    return false;
}

return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));

function decimalToBinary(n) {
// Base case
if (n === 0) {
    return "";
}

// Recursive case
return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(8));  
console.log(decimalToBinary(5));

function sum(n) {
if (n === 0) {
    return 0;
}
return n + sum(n - 1);
}
console.log(sum(5));
console.log(sum(3));
console.log(sum(10));

/*function binarySearch(arr, target, left, right) {
// Base case: target not found
if (left > right) {
    return -1;
}

let mid = Math.floor((left + right) / 2);

// Target found
if (arr[mid] === target) {
    return mid;
}

// Search left half
if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
}

// Search right half
return binarySearch(arr, target, mid + 1, right);
}
let numbers = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(numbers, 10, 0, numbers.length - 1)); // 4

*/

/*fibonacci*/
function fibonacci(n) {
if (n === 0) {
    return 0;
}

if (n === 1) {
    return 1;
}
return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));

/*function merge*/

/*reverseList*/

function reverseList(head) {
if (head === null || head.next === null) {
    return head;
}
let newHead = reverseList(head.next);
head.next.next = head;
head.next = null;
return newHead;
}

