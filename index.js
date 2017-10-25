var CounterUp = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    getDefaultProps: function() {
        return {
            console.log('Definicja podstawowych propsów.')
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});
var CounterDown = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});
var element1 = React.createElement(CounterUp);
var element2 = React.createElement(CounterDown);
ReactDOM.render(element1, document.getElementById('app1'));
ReactDOM.render(element2, document.getElementById('app2'));