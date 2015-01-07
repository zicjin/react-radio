'use strict';

var React = require('react')
var assign = require('object-assign')

module.exports = React.createClass({

    displayName: 'ReactRadioGroup',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        items: function(props, name){
            if (!props.children && !props.items){
                return new Error('Your component has no children. In this case, you should specify an items array.')
            }
        }
    },

    getDefaultProps: function() {
        return {
            defaultLabelStyle: {
                cursor: 'pointer',
                color: 'red'
            },
            defaultInputStyle: {
                cursor: 'pointer'
            }
        }
    },

    render: function(){

        var props = this.prepareProps(this.props)

        return <div {...props} />
    },

    prepareProps: function(thisProps) {

        var props = {}

        assign(props, thisProps)

        if (!props.children){
            props.labelStyle = this.prepareLabelStyle(props)
            props.inputStyle = this.prepareInputStyle(props)
            props.children   = this.prepareChildren(props)
        }


        return props
    },

    prepareLabelStyle: function(props) {
        return assign({}, props.defaultLabelStyle, props.labelStyle)
    },

    prepareInputStyle: function(props) {
        return assign({}, props.defaultInputStyle, props.inputStyle)
    },

    prepareChildren: function(props) {

        return (props.items || []).map(function(item, index){
            var itemProps = {}
            var inputStyle = assign({}, props.inputStyle)
            var labelStyle = assign({}, props.labelStyle)
            var children

            if (typeof item === 'string'){
                itemProps.value = item
                children = item
            } else {
                itemProps.value = item.value
                children = item.label || item.children

                if (item.inputStyle){
                    assign(inputStyle, item.inputStyle)
                }
                if (item.style){
                    assign(labelStyle, item.style)
                }
            }

            return <label style={labelStyle}>
                <input style={inputStyle} {...itemProps} name={props.name} type="radio" onChange={this.onInputChange.bind(this, props, itemProps)}/>
                {children}
            </label>
        }, this)
    },

    onInputChange: function(props, itemProps, event) {
        console.log(event.target.value, itemProps.value)
    }
})