# Pythonic non empty comparation

Usage:
```bash
npm i --save-dev not-empty
```
```javascript
// ES6
import notEmpty from "not-empty";

// ES5
var notEmpty = require( "not-empty").default;

if notEmpty([]) {}
```

if python:
```
if [] => false
if {}  => false
if False => false
if 0 => false
if None => false

if [1] => true
if {'1: 1} => true
if -1: => true

def foo(): pass
if foo => true

class Bar: pass
bar = Bar()
if bar => true
```
