import test from 'ava'
const css = require('../src/json2css')

const rules = {
	".btn": {
		"padding": "10px",
		"border": "none",
		"background-color": "white"
	}
}

test(t => {
	let styles = css(rules)

	t.is(styles, '.btn{padding: 10px;border: none;background-color: white;}')
})