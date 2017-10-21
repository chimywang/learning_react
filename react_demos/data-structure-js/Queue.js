var rf=require("fs");

function Queue() {
    this.dataStore = [];//队列中的元素
    this.enqueue = enqueue;//向队列队尾添加一个元素
    this.dequeue = dequeue;//删除队首的元素
    this.front = front;//读取队首的元素
    this.back = back;//读取队尾的元素
    this.toString = toString;//打印
    this.empty = empty;//判断是否为空
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

//test
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
//方块舞的舞伴分配问题
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}
function getDancers(males, females) {
    var names = rf.readFileSync("dancers.txt","utf-8");

    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}
function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        //putstr("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}


var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}