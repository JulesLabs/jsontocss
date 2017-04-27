module.exports = function(json) {
	let output = ""
	let selectors = Object.keys(json)
	selectors.forEach(selector => {
		output += selector + '{'
		let rules = Object.keys(json[selector])
		rules.forEach(rule => {
			output += `${rule}: ${json[selector][rule]};`
		})
		output += '}'
	})
	return output
}

/*
{
	".btn": {
		"margin": "0px",
		"padding": "10px"
	},
	"p": {
		"font-size": "20px"
	}
}
*/

/*
selectors = ["btn", "p"]
rules = [{"margin": "0px", "padding": "10px"}]
rule = {"margin": "0px"}
*/