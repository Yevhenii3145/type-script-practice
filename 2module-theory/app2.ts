// не рекомендуемый тип данных
let some: any;

some = 10;
some = "Some string";
some = {};

let num3: number;
num3 = some; // ошибки не будет

console.log(some)
console.log(num3)

let some2: unknown;
some2 = 10;

let num4: number;

// num4 = some2;   // ошибка будет

let some5: unknown;
some5 = 10;

let num: number;
if (typeof some5 === "number") {
    num = some5; // с проверкой ошибки не будет
}

// Tuple 
let fixed: [string, number];

fixed = ["Text", 10];
fixed.push("Add this text"); // компилятор это пропустит почему-то

// Enum
enum Role { ADMIN, USER };

const person = {
    role: Role.ADMIN,
}
if (person.role === Role.ADMIN) {
    console.log('Role:', Role.ADMIN)
}

// Union

let union: string | number;

union = 'Text';
union = 10;

// function combine(param1: number | string, param2: number | string) {
//     return param1 + param2;
// }

function combine(param1: number | string, param2: number | string) {
    if (typeof param1 === 'number' && typeof param2 === "number") {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

// Literal
let literal: 'first' | 'second';
literal = 'first';
function greeeting(action: 'hello' | 'bye') {
    if (action === 'hello') {
    console.log('Hello user!');
} else {
     console.log('Bye user!')
}
}