// Generics in TypeScript
const filter = (array, predicate)=>{
    let result = [];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        if (predicate(item)) result.push(item);
    }
    return result;
};
function divideEvenly(item) {
    return item % 2 === 0;
}
const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
];
console.log(filter(numbers, divideEvenly)); // other way of writing generic types
 // type Filter2<T> = {
 //   (array: T[], predicate: (item: T) => boolean): T[];
 // };

//# sourceMappingURL=index.a9443ee2.js.map
