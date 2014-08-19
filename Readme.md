#supsist - SUPer SImple STreams

##Get a string, give a string back.

A simple library that takes a function and returns a stream that runs all input through that function.

## Usage

Call `supsist` with a transform function. This function should take one string argument, and return a string. `supsist` will return a stream which runs all input through the transform function.

That's it.

```javascript
var supsist = require('supsist')

var appendStream = supsist(function(s) {
	return s + '1234'
})
```


## FAQ

### Q: Wait, how do I...
### A: I 'unno.  

# ¯\\\_😐_/¯
