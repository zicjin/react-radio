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

function buildRadio(props, index, arr){
    if (index < arr.length - 1){
        props.style.borderBottom = '1px solid gray'
    }

    props.style.display = 'block'
}

var App = React.createClass({

    onChange: function(value){
        console.log(arguments)
        this.setState({})
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
                    defaultValue={VALUE}
                    onChange={this.onChange}
                    labelStyle={{padding: 10}}
                    name="values"
                    items={items}
                    renderRadio={buildRadio}
                />
            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))