module.exports = {
	fromjson: function(json) {
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
	},

	apply: function(style) {
		switch(typeof style) {
			case 'Object':
				let css = this.fromjson(style)
				let s = document.createElement('style')
				s.setAttribute('type', 'text/css')
				let head = (document.getElementsByTagName('head')[0]) || document.createElement('head')
				s.appendChild(document.createTextNode(css(rules)))
				head.appendChild(s)
				break
			case 'String':
				let s = document.createElement('style')
				s.setAttribute('type', 'text/css')
				let head = (document.getElementsByTagName('head')[0]) || document.createElement('head')
				s.appendChild(document.createTextNode(css(rules)));
				head.appendChild(s)
				break
		}
	}
}
