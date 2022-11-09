/*
var day = []
var week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
]
var month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
]
 for (let x in week) {
    console.log(week[x]);
 }

//let indexWeek = week.indexOf(day);
/*
for (let key in day) {
    const y = (indexWeek + elem - 1) % 6
    console.log($,{array} + "января"  $,{week})
}
*/
var day = []
var week = [
"Понедельник",
"Вторник",
"Среда",
"Четверг",
"Пятница",
"Суббота",
"Воскресенье"
]

var a = 6
for (let i = 1; i < 32; i++) {
console.log(i, "января,", week[a])
a = a + 1
if (a == 7)
{
a = 0
}
}