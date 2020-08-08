function getMethods(obj) {
    const result = [];
    for (const prop in obj) {
        try {
            if (typeof(obj[prop]) === "function") {
                result.push(`${prop}: ${obj[prop].toString()}`);
            }
        } catch (err) {
            result.push(`${prop}: inaccessible`);
        }
    }
    return result;
}

class One {
    render() {
        return 'one';
    }
}

class Two extends One {
  text = 'two';
}

class Three extends Two {
    toString() {
        return 'Three';
    }
}

const one = new One();
const two = new Two();
const three = new Three();

(one instanceof One) ? console.log('ok') : console.log('fail');
(one instanceof Two) ? console.log('fail') : console.log('ok');
(one instanceof Three) ? console.log('fail') : console.log('ok');

(two instanceof One) ? console.log('ok') : console.log('fail');
(two instanceof Two) ? console.log('ok') : console.log('fail');
(two instanceof Three) ? console.log('fail') : console.log('ok');

(three instanceof One) ? console.log('ok') : console.log('fail');
(three instanceof Two) ? console.log('ok') : console.log('fail');
(three instanceof Three) ? console.log('ok') : console.log('fail');

(one.toString) ? console.log('one has toString') : console.log('one doesn\'t have toString');
(two.toString) ? console.log('two has toString') : console.log('two doesn\'t have toString');
(three.toString) ? console.log('three has toString') : console.log('three doesn\'t have toString');

(typeof(one.toString) === 'function') ? console.log('one toString function exists') : console.log('one toString function doesn\'t exist');
(typeof(two.toString) === 'function') ? console.log('two toString function exists') : console.log('two toString function doesn\'t exist');
(typeof(three.toString) === 'function') ? console.log('three toString function exists') : console.log('three toString function doesn\'t exist');

Object.prototype.hasOwnProperty.call(one, 'toString') ? console.log('one hasOwnProperty toString') : console.log('one no-hasOwnProperty toString');
Object.prototype.hasOwnProperty.call(two, 'toString') ? console.log('two hasOwnProperty toString') : console.log('two no-hasOwnProperty toString');
Object.prototype.hasOwnProperty.call(three, 'toString') ? console.log('three hasOwnProperty toString') : console.log('three no-hasOwnProperty toString');

(one.render) ? console.log('one has render') : console.log('one doesn\'t have render');
(two.render) ? console.log('two has render') : console.log('two doesn\'t have render');
(three.render) ? console.log('three has render') : console.log('three doesn\'t have render');

Object.prototype.hasOwnProperty.call(one, 'render') ? console.log('one hasOwnProperty render') : console.log('one no-hasOwnProperty render');
Object.prototype.hasOwnProperty.call(two, 'render') ? console.log('two hasOwnProperty render') : console.log('two no-hasOwnProperty render');
Object.prototype.hasOwnProperty.call(three, 'render') ? console.log('three hasOwnProperty render') : console.log('three no-hasOwnProperty render');

(typeof(one.render) === 'function') ? console.log('one render function exists') : console.log('one render function doesn\'t exist');
(typeof(two.render) === 'function') ? console.log('two render function exists') : console.log('two render function doesn\'t exist');
(typeof(three.render) === 'function') ? console.log('three render function exists') : console.log('three render function doesn\'t exist');

(one.text) ? console.log('one has text') : console.log('one doesn\'t have text');
(two.text) ? console.log('two has text') : console.log('two doesn\'t have text');
(three.text) ? console.log('three has text') : console.log('three doesn\'t have text');

Object.prototype.hasOwnProperty.call(one, 'text') ? console.log('one hasOwnProperty text') : console.log('one no-hasOwnProperty text');
Object.prototype.hasOwnProperty.call(two, 'text') ? console.log('two hasOwnProperty text') : console.log('two no-hasOwnProperty text');
Object.prototype.hasOwnProperty.call(three, 'text') ? console.log('three hasOwnProperty text') : console.log('three no-hasOwnProperty text');

console.log('one', one);
console.log('two', two);
console.log('three', three);

console.log('for in one');
for( const prop in one ) {
    console.log( prop );
}

console.log('for in two');
for( const prop in two ) {
    console.log( prop );
}

console.log('for in three');
for( const prop in three ) {
    console.log( prop );
}

console.log('getMethods one');
console.log(getMethods(one).join("\n"));

console.log('getMethods two');
console.log(getMethods(two).join("\n"));

console.log('getMethods three');
console.log(getMethods(three).join("\n"));
