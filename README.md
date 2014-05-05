robust-sequence-to-fixed-point
==============================
Converts a non-overlapping increasing sequence of numbers into a fixed point big number representation.

# Example

```javascript
var toFixed = require("robust-to-fixed-point")

var seq = [Math.pow(2, -200), Math.pow(2, 200)]

console.log(toFixed(seq).toString(16))
```

Output:

```javascript
1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

# Install

```
npm install robust-sequence-to-fixed-point
```

# API

#### `require("robust-sequence-to-fixed-point")(seq)`
Converts a sequence of floats into a fixed point [bignumber](https://www.npmjs.org/package/bn.js).

* `seq` is a sequence of floating point values

**Returns** A fixed point big integer, with the decimal point at 2^1024.

# Credits
(c) 2014 Mikola Lysenko. MIT License