var rf=require("fs");


/**
 * List构造函数
 * @constructor
 */
function List() {
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.listSize = 0; //列表元素的个数
    this.pos = 0; //列表的当前位置
    this.length = length; //返回列表中元素的个数
    this.clear = clear; //清空列表中的所有元素
    this.toString = toString; //返回列表的字符串形式
    this.getElement = getElement; //返回当前位置的元素
    this.insert = insert; //在现有的元素后面添加新元素
    this.append = append; //在列表的末尾添加新元素
    this.remove = remove; //从列表中删除元素
    this.front = front; //将列表的当前位置设移动到第一个元素
    this.end = end; //将列表的当前位置移动到最后一个元素
    this.prev = prev; //将当前位置后移一位
    this.next = next; //将当前位置前移一位
    this.currPos = currPos; //返回列表的当前位置
    this.moveTo = moveTo; //将当前位置移动到指定位置
    this.find = find; //
    this.contains = contains; //
}
/**
 * 在列表的下一个位置增加一个新的元素，这个位置刚好等于变量listSize的值
 * @param element
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}
/**
 *查找元素，找到了返回索引，未找到返回-1
 * @param element
 * @returns {number}
 */
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return - 1;
}
/**
 * 先找到再删除，
 * 删除列表中的一个元素
 * @param element
 * @returns {boolean}
 */
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

/**
 * 返回列表中元素的个数
 * @returns {number|*}
 */
function length() {
    return this.listSize;
}
/**
 * ，用来显示列表中的元素了
 * @returns {Array}
 */
function toString() {
    return this.dataStore.toString();
}
/**
 *
 * @param element
 * @param after
 * @returns {boolean}
 */
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element); ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {--this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}


//test1
//
// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());
// names.clear();
// console.log(names.toString());
var movies=rf.readFileSync("films.txt","utf-8").split("\n");
console.log(movies);
//var movies = readFile('films.txt').split("\n");
function createArr(file) {
    var arr = rf.readFileSync("films.txt","utf-8").split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}
var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}
function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        }
        else {
            console.log(list.getElement());
        }
    }
}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }
    else {
        console.log(movie + " is not available.");
    }
}