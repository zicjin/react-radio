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

var VALUE = 'watermelon'
var INDEX = 0
var colors = ['red','blue','magenta']
function buildRadio(props, index, arr){
    if (index < arr.length - 1){
        props.style.borderBottom = '1px solid ' + (colors[INDEX % colors.length])
    }
    props.style.display = 'block'
    // return <label {...props}/>
}

var App = React.createClass({

    onChange: function(value){
        console.log(arguments)
        // VALUE = value
        INDEX++
        this.setState({})
    },

    onClick: function() {
        // console.log(this.refs.r.getValue())
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
            <div className="App" style={{padding: 20, border: '1px solid red'}} onClick={this.onClick} >
                <RadioGroup defaultValue={VALUE} onChange={this.onChange} name="values" items={items} radioFactory={buildRadio}/>
            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))