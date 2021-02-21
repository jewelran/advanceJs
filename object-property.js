const studentName = [
  { di: 1, name: "jewel rana" },
  { di: 2, name: "suhel rana" },
  { di: 3, name: "kamal" },
  { di: 4, name: "tomal" },
  { di: 5, name: "jamal" },
];
// for loop...........
let result = [];
for (let i = 0; i < studentName.length; i++) {
  const element = studentName[i];
  result.push(element.name);
}
console.log(result);

// map...........................
const names = studentName.map((s) => s.di);
console.log(names);
// filter.............................
const bigger = studentName.filter((x) => x.di >= 3);
console.log(bigger);
