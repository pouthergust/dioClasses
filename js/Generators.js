// Symbol
const uniqueId = Symbol('Hello');

// Well Known Symbols 
Symbol.iterator;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

/* while (true) {
    let {value, done} = it.next();

    if (done) {break;}
    console.log(value)
} */

/* for (let value of arr) {
    console.log(value);
};
 */

//Tornando um objeto iteravel
const obj = { 
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

for (let value of obj) {
    console.log(value);
};

const arr2 = [...obj];
console.log(arr2)

// Generators
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
};

const its = hello();

console.log(its.next());
console.log(its.next());
console.log(its.next('Outside'));

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const num = naturalNumbers();
console.log(num.next())

const obj2 = { 
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};
for (let value of obj2) {
    console.log(value)
}