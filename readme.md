## js fxn

Makes a pipeline between functions.

### pipe

```js
const add10 = a => a + 10;
const mul2 = a => a * 2;
const sq = a => a * a;

const f = pipe(add10, mul2, sq);
const res = f(5);

console.log(res) // 60
```
