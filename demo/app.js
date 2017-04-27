const css = require('../src/json2css')

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