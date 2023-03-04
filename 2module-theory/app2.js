// не рекомендуемый тип данных
var some;
some = 10;
some = "Some string";
some = {};
var num3;
num3 = some; // ошибки не будет
console.log(some);
console.log(num3);
var some2;
some2 = 10;
var num4;
// num4 = some2;   // ошибка будет
var some5;
some5 = 10;
var num;
if (typeof some5 === "number") {
    num = some5; // с проверкой ошибки не будет
}
// Tuple 
var fixed;
fixed = ["Text", 10];
fixed.push("Add this text"); // компилятор это пропустит почему-то
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
var person = {
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Role:', Role.ADMIN);
}
// Union
var union;
union = 'Text';
union = 10;
// function combine(param1: number | string, param2: number | string) {
//     return param1 + param2;
// }
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// Literal
var literal;
literal = 'first';
function greeeting(action) {
    if (action === 'hello') {
        console.log('Hello user!');
    }
    else {
        console.log('Bye user!');
    }
}
