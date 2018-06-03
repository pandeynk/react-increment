import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

import { incrementAction, decrementAction, resetAction } from './../actions/IncAction';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.counter>10 && nextProps.counter-this.props.counter>1) {
        //     return false;
        // }
        return true;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.counter>20){
            this.props.reset();
        }
    }

    increment(e) {
        e.preventDefault();
        this.props.increment(e.target.value);
    }

    decrement(e) {
        e.preventDefault();
        this.props.decrement(e.target.value);
    }

    render() {
        return (
            <div>
                <h1>Increment || Decrement</h1>
                <button onClick={this.increment} value="2"> Plus +2 </button> <br/>
                <button onClick={this.increment} value="1"> Plus +1 </button> <br/>
                <p> {this.props.counter} </p><br/>
                <button onClick={this.decrement} value="1"> Minus -1 </button> <br/>
                <button onClick={this.decrement} value="2"> Minus -2 </button>
            </div>
            )
    }
}

const {number, func}  = PropTypes;

Increment.propTypes = {
    counter: number.isRequired,
    increment: func.isRequired,
    decrement: func.isRequired,
    reset: func.isRequired
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: incrementAction,
        decrement: decrementAction,
        reset: resetAction
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
