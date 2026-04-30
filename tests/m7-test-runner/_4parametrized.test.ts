import {expect, test} from "@playwright/test"

const people = ['Alica', 'Bob', 'Charlie', 'David'];

for (const name of people) {
    test(`Greet ${name}`, async () => {
        console.log(`Hello, ${name}!`);
});
}

const map1 = new Map();
map1.set('2', '20');
map1.set('3', '30');

for (const [key, value] of map1) {
  
  test(`testing 10x function with ${key} and ${value}`, async () => {
    
    const result = Number(key) * 10;           // ← приводим к числу
    
    expect(result).toEqual(Number(value));     // ← оба значения числа
    // или ещё лучше:
    // expect(result).toBe(Number(value));
  });
}