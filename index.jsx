'use strict';

var React      = require('react')
var RadioGroup = require('./src')

var items = [
    {
        value: 'apple',
        label: 'Apple'
    },
    {
        value: 'test'
    },
    'orange',
    'watermelon'
]

var VALUE = 'watermelon'

var App = React.createClass({

    onChange: function(value){
        VALUE = value
        this.setState({})
    },

    buildRadio: function(props, index, arr){
        props.children[0] = props.checked? 'x' : 'o'
        //props.children.push(...) you could also add a
        //hidden input for the value, if you need to submitzzz
        props.onClick = this.onChange.bind(this, props.value)
    },

    render: function() {

        var style = {
            width: '50%'
        }


        return (
            <div className="App"
                style={{margin: 20, display: 'inline-block'}}
            >
                <RadioGroup
                    checkedLabelStyle={{color: 'magenta'}}
                    value={VALUE}
                    onChange={this.onChange}
                    labelStyle={{padding: 10}}
                    name="values"
                    items={items}
                    xrenderRadio={this.buildRadio}
                />
            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))