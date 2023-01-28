// const Employee = require('./Employee.class');
const Vampire = require('./Vampire.class');

const ada = new Vampire("Ada", 30);

const craig = new Vampire("Craig", 1950);
const arvinder = new Vampire("Arvinder", 2021);
const angela = new Vampire("Angela",  1990);
const karla = new Vampire("Karla", 1999);
const chandler = new Vampire("Chandler", 2000);
const phil = new Vampire("Phil", 1091);
const florida = new Vampire("Florida", 1191);

const david = new Vampire("David", 1450);
const emma = new Vampire("Emma", 1666);
const jeremy = new Vampire("Jeremy", 1665);
const brian = new Vampire("Brian", 1290);
const simone = new Vampire("Simone", 1985);
const ali = new Vampire("Ali", 1977);
const sarah = new Vampire("Sarah", 1998);
const andrew = new Vampire("Andrew", 1995);

ada.addOffspring(craig);
ada.addOffspring(arvinder);
ada.addOffspring(angela);
ada.addOffspring(phil);
craig.addOffspring(simone);
craig.addOffspring(ali);
ali.addOffspring(sarah);
ali.addOffspring(andrew);
phil.addOffspring(florida);
phil.addOffspring(david);
phil.addOffspring(brian);
david.addOffspring(emma);
david.addOffspring(jeremy);
angela.addOffspring(karla);
karla.addOffspring(chandler);

console.log(ali.vampireWithName(sarah));

