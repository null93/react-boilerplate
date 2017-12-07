import React from "react"
import App from "containers/app"
import { render } from "react-dom"
import $ from "jquery"

render ( <App/>, document.getElementById ("app") );
console.log ( "Window Height: " + $(window).height () )
console.log ( "Window Width: " + $(window).width () )
