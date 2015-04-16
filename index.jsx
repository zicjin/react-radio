'use strict';

require('./index.styl')

var React      = require('react')
var RadioGroup = require('react-radio')

var fruits = [
    'apple',
    'watermelon',
    'orange',
    'banana'
]

var SELECTED_FRUIT

var colors = [
    {
        value: 'red',
        style: { color: 'red' }
    },
    {
        value: 'blue',
        style: { color: 'blue'}
    },
    {
        value: 'magenta',
        style: {color: 'magenta'}
    }
]

var SELECTED_COLOR = 'blue'

var App = React.createClass({

    displayName: 'App',

    render: function(){

        return <div>
            <h1>React Radio Group</h1>


            <code>npm install --save react-radio</code>
            <p>Github: <a target="_blank" href="https://github.com/zippyui/react-radio">github.com/zippyui/react-radio</a></p>

            <h3>Fruits</h3>
            <p>You chose <b>{SELECTED_FRUIT || 'none'}</b></p>
            <RadioGroup
                items={fruits}
                labelStyle={{display: 'block', padding: 10}}
                inputStyle={{marginRight: 10}}
                onChange={this.onFruitChange}
                defaultValue={SELECTED_FRUIT}
            >
            </RadioGroup>

            <p style={{marginBottom: 10, color: 'gray', border: '1px solid gray', padding: 20, display: 'inline-block'}}>
            Hey! Just in case you are interested in a DataGrid, check out <a href="http://zippyui.github.io/react-datagrid" target="_blank">zippyui.github.io/react-datagrid</a>
            </p>

            <h3>Colors</h3>
            <p>You chose <b>{SELECTED_COLOR || 'none'}</b></p>
            <RadioGroup
                items={colors}
                style={{border: '1px solid gray'}}
                onChange={this.onColorChange}
                labelStyle={{display: 'block', padding: 10}}
                defaultValue={SELECTED_COLOR}
            >
            </RadioGroup>
        </div>
    },
    onColorChange: function(value) {
        SELECTED_COLOR = value
        this.setState({})
    },
    onFruitChange: function(value) {
        SELECTED_FRUIT = value
        this.setState({})
    }
})

React.render(<App />, document.getElementById('content'))