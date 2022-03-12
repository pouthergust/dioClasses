// Console
console.log('Black Text');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 1000);

console.table(['celso henrique', 'Digita innovation One']);
console.assert(1 === 1, 'Ops');
console.log('%c styled log', 'color:blue')