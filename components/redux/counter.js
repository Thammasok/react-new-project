import React, {Component} from 'react'
import {connect} from 'react-redux'
import { translate } from 'react-i18next'
import {increment, decrement, reset} from '../../actions/clock'

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render (props) {
    const {count, t} = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          {t('common:count')}: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = ({count}) => ({count})

export default translate()(connect(mapStateToProps)(Counter))
