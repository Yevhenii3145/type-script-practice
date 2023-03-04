var num;
var str;
var bool;
var empty;
var notParam;
num = 10;
str = "Some string";
bool = true;
empty = null;
notParam = undefined;
var num2 = 10;
function func(num, str, bool, empty) {
    // some logic
}
function func2(num, str, bool, empty) {
    if (num === void 0) { num = 10; }
    if (str === void 0) { str = "Some string"; }
    if (bool === void 0) { bool = true; }
    if (empty === void 0) { empty = null; }
    // some logic
}
var arrString;
arrString = ["Text", "gg", "wp"];
var arrNumber;
arrNumber = [1, 4, 8, 8];
var arrAny;
arrAny = [1, "Text"];
var arrObj;
arrObj = [{ name: "Ugin" }, { name: "Alex" }, { name: "Anna" }];
var obj = {};
var obj2 = {};
// все поля обязательные
var obj3 = { name: "Ugin", age: 30 };
var obj4 = { age: 322 };
obj4.name = "Alex";
// с базы данных пришел ответ
var resp = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: "New product",
        description: "This is awesome product!"
    }
};
var data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: "This is awesome product!"
    }
};
