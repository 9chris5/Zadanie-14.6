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

    componentWillMount: function() {
        return {
            console.log('Ustawianie początkowych stanów')
        };
    },
    
    componentDidMount: function() {
        return {
            console.log('Tutaj np. operacje na obiekcie')
        };
    },
    
    componentWillReceive: function(nextProps) {
        return {
            console.log('Tutaj dodawanie propsów')
        };
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
        return {
            console.log('Tutaj np. zablokowanie re-renderingu')
        };
    },
    
    componentWillUpdate: function(nextProps, nextState) {
        return {
            console.log('Aktualizacja propsów i state')
        };
    },
    
    componentDidUpdate: function(prevProps, prevState) {
        return {
            console.log('Tutaj operacje z wykorzystaniem starych propsów i state')
        };
    },
    
    componentWillUnmount: function() {
        return {
            console.log('Np. odczepianie event listenera')
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