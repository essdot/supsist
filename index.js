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

	var returnVal

	if(this.__transform) {
		returnVal = this.__transform(s)
	} else {
		returnVal = defaultTransform.call(this, s)
	}

	if(returnVal) {
		this.push(returnVal.toString())
	}

	callback()
}

SuperSimpleStream.prototype.__transform = defaultTransform

function defaultTransform(s) {
	return s
}

function make(transformFunc) {
	var newSS = new SuperSimpleStream

	if(transformFunc && typeof transformFunc === 'function') {
		newSS.__transform = transformFunc
	}

	return newSS
}