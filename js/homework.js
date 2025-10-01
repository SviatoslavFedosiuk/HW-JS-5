// 1
const drink = prompt("Виберіть ваш улюблений напиток").toLowerCase().trim();
switch (drink) {
    case "чай":
        alert("Ви обрали чай")
        break;
case "кава":
        alert("Ви обрали каву")
        break;
    case "сік":
        alert("Ви обрали сік")
        break;
    default:
        alert("Цього напою немає у наявності")
        break;
}
// 2
 const day = prompt("Enter day of the week").toLowerCase().trim();
switch (day) {
    case "monday":
        alert("Work day")
        break;
case "tuesdey":
        alert("Work day")
        break;
    case "wednesday":
        alert("Work day")
        break;
    case "thursday":
        alert("Work day")
        break;
    case "friday":
        alert("Work day")
        break;
    case "saturday":
        alert("Holiday")
        break;
    case "sunday":
        alert("Holiday")
        break;
    default:
        alert("Not correct")
        break;
}
// 3
const month = Number(prompt("Enter number of month")).toLowerCase().trim();
switch (month) {
    case 1:
        alert("Winter")
        break;
    case 2:
        alert("Winter")
        break;
    case 3:
        alert("Spring")
        break;
    case 4:
        alert("Spring")
        break;
    case 5:
        alert("Spring")
        break;
    case 6:
        alert("Summer")
        break;
    case 7:
        alert("Summer")
        break;
    case 8:
        alert("Summer")
        break;
    case 9:
        alert("Autumn")
        break;
     case 10:
        alert("Autumn")
        break;
     case 11:
        alert("Autumn")
        break;
case 12:
        alert("Winter")
        break;
    default:
        alert("Eror")
        break;
}
// 4
const color = prompt("Виберіть колір світлофору").toLowerCase().trim();
switch (color) {
    case "червоний":
        alert("стоп")
        break;
case "зелений":
        alert("йти")
        break;
    case "жовтий":
        alert("жовтий")
        break;
    default:
        alert("У світлофорі немає такого кольру")
        break;
}
// 5
const a = prompt("Перше число:");
const b = prompt("Друге число:");
const op = prompt("Операція (+ - * /):");
switch (op) {
    case "+":
        console.log(`${a} + ${b} = ${a + b}`);
        break;
case "-":
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case "*":
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case "/":
        if (b === 0) {
            console.log("Ділення на 0 не можливе");
            break
        }
        console.log(`${a} / ${b} = ${a / b}`);
        break;
    default:
        console.log(error);
        
        break;
}