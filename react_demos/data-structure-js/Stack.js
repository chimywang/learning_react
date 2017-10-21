function Stack() {
    this.dataStore = [];//保存栈内元素
    this.top = 0;//记录栈顶位置
    this.push = push;//压栈
    this.pop = pop;//出栈
    this.peek = peek;//栈顶元素
    this.length = length;//栈深度
    this.clear = clear;//清空栈
}

/**
 * 压栈，在栈顶添加一个元素
 * @param element
 */
function push(element) {
    this.dataStore[this.top++] = element;
}
/**
 * 出栈
 */
function pop() {
    return this.dataStore[--this.top];
}
/**
 * 返回栈顶元素
 * @returns {*}
 */
function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}
//测试数据
console.log('测试数据开始');
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

//二进制和八进制数
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);


//判断给定字符串是否是回文

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

//计算任何数字的阶乘
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
//使用栈模拟递归过程
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}