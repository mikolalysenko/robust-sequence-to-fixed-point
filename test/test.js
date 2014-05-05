"use strict"

var tape = require("tape")
var toFixed = require("../rb2fp.js")
var bn = require("bn.js")

tape("robust-to-fixed-point", function(t) {
  var a = toFixed([1])
  var b = bn(1)
  b.ishln(1074)
  t.equals(a.toString(16), b.toString(16))

  t.equals(toFixed(Math.pow(2, -1074)).toString(), "1")

  t.end()
})