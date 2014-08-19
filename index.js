var Stream = require('stream')
var util = require('util')
var Transform = Stream.Transform

util.inherits(SuperSimpleStream, Transform)

module.exports = make
module.exports.cons = SuperSimpleStream

function SuperSimpleStream() {
	Transform.call(this)
}

SuperSimpleStream.prototype._transform = function SuperSimpleStreamTransform(chunk, encoding, callback) {
	var s = chunk.toString()
	var returnVal = this.__transform(s)

	if(returnVal) {
		this.push(returnVal.toString())
	}

	callback()
}

SuperSimpleStream.prototype.__transform = function defaultTransform(s) {
	return s
}

function make(transformFunc) {
	var newSS = new SuperSimpleStream

	if(transformFunc) {
		newSS.__transform = transformFunc
	}

	return newSS
}