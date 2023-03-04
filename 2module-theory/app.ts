let str: string;
let num: number;
let bool: boolean;
let empty: null;
let notParam: undefined;

num = 10;
str = "Some string";
bool = true;
empty = null;
notParam = undefined;

const num2 = 10;

function func(num: number, str: string, bool: boolean, empty: null) {
    // some logic
}
function func2(num = 10, str ="Some string", bool = true, empty = null) {
    // some logic
}

let arrString: string[];
arrString = ["Text","gg", "wp"]
let arrNumber: number[];
arrNumber = [1, 4, 8, 8];
let arrAny: any[];
arrAny = [1, "Text"]
let arrObj: { name: string }[];
arrObj = [{ name: "Ugin" }, { name: "Alex" }, { name: "Anna" }];

const obj: object = {};
const obj2: {} = {};
// все поля обязательные
const obj3: {name: string, age: number} = { name: "Ugin", age: 30 };
const obj4: { name?: string, age: number } = { age: 322 };
obj4.name = "Alex";

// с базы данных пришел ответ
let resp = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: "New product",
        description: "This is awesome product!"
    }
};

const data: {
    id: number;
    price: number;
    permission: string[];
    details: {
        title: string;
        description?: string;
    }
} = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: "This is awesome product!"
    }
}