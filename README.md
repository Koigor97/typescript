<img src="images/typescript.webp" alt="Typescript logo" width="70" height="70">

# typescript

They say, you never stop learning in life, that can't be more truer in the field of Tech. I bet someone or some team is building the next programming language, framework or library right now. TypeScript was released in 2012 and it's still being developed. TypeScript adds a rich type system to JavaScript. But what is TypeScript 🤷🏾, join me as I figure it out.

### What I learned today - Sep/07/2023:

In TypeScript, we define the type of value/data (pun intented) a variable should have. For example:

```ts
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(5, 2)); // output: 10
```

Incase later in our code we try to pass a string or amn array, TypeScript would raise an error -> `Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)`.

The different type of types (pun intented 😃):
| Types | Summary |
| :------: | :------- |
| `any` | As the name implies, the 'any' Type means you assign any value type to a variable that is define as 'any'. The Type is the actually the default behavior of JavaScript and defeats the whole puporse of TypeScript. It must only be use as a last resort. |
| `unknown` | The 'unknown' type is similar to 'any' type in which you can assign any value to it. But as the name implies, 'unknown' type is unaware of what the assigning value would be 🤷🏾. The unknown type is best use with conditional statements. |
| `boolean` | The 'boolean' type is assign the value `true` or `false`. It also takes and expression that would return true or false. Like `booleanType = 1 > 0;`. However, `undefined` and `null` are not considered as falsy values. |
| `number` | 'Number' type is pretty forward. You assign number values, this includes int, floats, negative number and also expression that will result to number value. |
| `bigint` | We are quite familiar with 'BigInt/n' from JavaScript. It is the same with TypeScript as well. BigInt allows us to work with whole numbers exceeding beyond the power raise to 53. BigInt however, cannot have decimal values or be used with 'Math' object. |
| `string` | 'string' type are straight forward. Any value that is between a single or double quotes are string type. |
| `object` | You 'object' type by defining within a curly braces the type of value for each property. Like `const country: {name: string; population: number} = {name: 'Sierra Leone', population: 8_000_000}`. |
