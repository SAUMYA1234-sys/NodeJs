var nums = new Array(11,12,13,14)
nums.forEach(function(val,index){
    console.log(val);
}

)

nums.reverse();

nums.forEach(function(valuw,index){
    console.log(valuw)
})

let map = new Map();
map.set(11,"val1");
map.set(22,"val2");
map.set(33,"val3");

let map1 = new Map([
    ['a',1],['b',2]
]);

map1.forEach(function(val,ind){
    console.log(val);
    console.log(ind);
})