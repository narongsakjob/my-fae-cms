((window, $) => {
	'use strict'

	if(!window.Myapp) window.Myapp = {}

	let Myapp = window.Myapp
	Myapp.App = Myapp.App || {}
	
	Myapp.App.Test = {
		initTest: function() {
			console.log("success")
		},
		Init: function() {
 			this.initTest()
		}
	}

})(window, jQuery)