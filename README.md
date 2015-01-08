# react-radio

> React RadioGroup

## Install

```sh
$ npm install react-radio
```

## Usage

```jsx
var RadioGroup = require('react-radio')

var colors = [
    {
        value: 'red',
        label: 'Red color',
        style: {
            color: 'red'
        }
    },
    'blue',
    'orange'
]

function onChange(value, event){
    console.log('selected ', value)
}

<RadioGroup name="colors" defaultValue={'red'} items={colors} onChange={onChange} />
<RadioGroup name="colors" value={'red'} items={colors} onChange={onChange} />

<RadioGroup name="colors" value={'red'} onChange={onChange}>
    <input type="radio" value="blue" />blue

    <input type="radio" value="red" />red
</RadioGroup>
```
