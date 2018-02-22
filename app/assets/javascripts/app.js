let ready = () => {

	'use strict'
	if (!window.Myapp) window.Myapp = {}
	
	let Myapp = window.Myapp
	
	Myapp.App = Myapp.App || {}

	// Initialize application
	Myapp.Init = (() => {
		Myapp.App.Test.Init()
	})()


}

window.$(document).on('turbolinks:load', ready)
