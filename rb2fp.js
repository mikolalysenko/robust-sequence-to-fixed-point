"use strict"

module.exports = robustToFixed

var db = require("double-bits")
var BN = require("bn.js")

function floatToBigNum(a) {
  var fa = db.fraction(a)
  var ea = db.exponent(a)
  var na = BN(fa[0]&((1<<24)-1))
  na = na.add(BN(fa[0]>>>24).ishln(24))
  na = na.add(BN(fa[1]).ishln(32))
  if(!db.denormalized(a)) {
    na.ishln(ea+1022)
  }
  if(a < 0) {
    return na.neg()
  }
  return na
}

function robustToFixed(seq) {
  if(typeof seq === "number") {
    return floatToBigNum(seq)
  }
  var r = BN(0)
  for(var i=0; i<seq.length; ++i) {
    r = r.add(floatToBigNum(seq[i]))
  }
  return r
}

module.exports.DECIMAL_POINT = 1074