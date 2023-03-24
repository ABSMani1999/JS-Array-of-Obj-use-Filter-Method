
const employees=[
	{ name:'David carlson', age:30},
	{ name:'john cena', age:34 },
	{ name:'mike sheridan', age:25 },
	{ name:'john carte', age:50 }
];

var a=employees.filter(function(b){
	return b.name.indexOf("john") 
})
console.log(a);
