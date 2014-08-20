#supsist - SUPer SImple STreams

##Get a string, give a string back.

A simple library that takes a function and returns a stream that runs all input through that function.

## Usage

Call `supsist` with a transform function. This function should take one string argument, and return a string. `supsist` will return a stream which runs all input through the transform function.

```javascript
var supsist = require('supsist')

var appendStream = supsist(function(s) {
	return s + '1234'
})
```

That's it.

  
  
## FAQ

### Q: Wait, how do I...
### A: I 'unno.  

# ¯\\\_😐_/¯
