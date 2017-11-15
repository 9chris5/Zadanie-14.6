var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    getDefaultProps: function() {
        console.log('Definicja podstawowych propsów.')
    },

    componentWillMount: function() {
        console.log('Ustawianie początkowych stanów')
    },
    
    componentDidMount: function() {
        console.log('Tutaj np. operacje na obiekcie')
    },
    
    componentWillReceive: function(nextProps) {
        console.log('Tutaj dodawanie propsów')
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Tutaj np. zablokowanie re-renderingu');
        return true
    },
    
    componentWillUpdate: function(nextProps, nextState) {
        console.log('Aktualizacja propsów i state')
    },
    
    componentDidUpdate: function(prevProps, prevState) {
        console.log('Tutaj operacje z wykorzystaniem starych propsów i state')
    },
    
    componentWillUnmount: function() {
        console.log('Np. odczepianie event listenera')
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
        
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app1'));