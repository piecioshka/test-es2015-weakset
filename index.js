var users = [{ name: 'Peter' }, { name: 'Kate' }];
console.info('[+] Create users =', JSON.stringify(users));

var weakSet = new WeakSet();
console.info('[+] Create weakSet =', JSON.stringify(weakSet));

weakSet.add(users[0]);
console.info('[+] Add users[0] to weakSet');
weakSet.add(users[1]);
console.info('[+] Add users[1] to weakSet');

console.log('[*] Display weakSet (before removing reference)', weakSet);

users.splice(0, 1);
console.warn('[-] Remove first object from "users" array');

console.log('[*] Display weakSet (after removing reference)', weakSet);

const GC_TIMEOUT = 5 * 1000;
const GC_CHECKER_INTERVAL = 500;

setTimeout(function () {
    setInterval(function () {
        console.log('%c Display weakSet collection', 'color: green', weakSet);
    }, GC_CHECKER_INTERVAL);
}, GC_TIMEOUT);

console.info('%c Wait "%d" time for GC', 'color: blue', GC_TIMEOUT);
console.info('%c After that time execute checking on each "%d"', 'color: blue', GC_CHECKER_INTERVAL);
