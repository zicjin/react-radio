'use strict';

var React = require('react')
var RadioGroup = require('./src')

var items = [
    {
        value: 'apple',
        label: 'Apple',
        style: {
            color: 'blue'
        }
    },
    'orange',
    'watermelon'
]

var App = React.createClass({

    onChange: function(value){
        VALUE = value
        this.setState({})
    },

    render: function() {

        var style = {
            width: '50%'
        }

        function fn(value){
            console.log('clicked')
        }

        // <Field placeholder="x" style={style} label='First Name' value={VALUE} onChange={this.onChange}/>

        return (
            <div className="App" style={{padding: 10}}>
                <RadioGroup name="values" items={items}/>
            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))