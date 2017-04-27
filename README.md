# JSON2CSS

This little 2 minutes project was born out of all the difficoulty and complexite that derives from setting up webpack to imprt styles from other css files into javascript entry points.

It was also kinda my own reaction to React's JSON styling, which I find to be really nice, since it allows to style your elements without the need for "context-switching" from JavaScript to CSS or SASS.

This is how you use it: first of all, you have to require it:

```javascript
const css = require('jsontocss')
```

Then you can just convert a whole JSON object to a CSS style and append it to the element's head as a `style` tag:

```javascript
const rules = {
	"button": {
		"padding": "10px",
		"border": "none",
		"background-color": "#eee",
		"transition": "all 1s ease-in-out",
		"font-size": "20px"
	},
	"button:hover": {
		"background-color": "white"
	},
	"button:focus": {
		"outline": "none"
	},
	"input": {
		"border": "none",
		"font-size": "20px",
		"min-height": "30px",
		"padding": "5px",
		"transition": "all 0.3s ease-in"
	},
	"input:focus": {
		"outline": "none",
		"border-bottom": "2px solid #eee"
	}
}

let s = document.createElement('style')
s.setAttribute('type', 'text/css')

let head = document.getElementsByTagName('head')[0]

s.appendChild(document.createTextNode(css(rules)));

head.appendChild(s)
```

Have fun!