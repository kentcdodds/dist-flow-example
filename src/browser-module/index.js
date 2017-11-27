// @flow
import React from 'react'
import type {Node} from 'react'

type Props = {
  initialState: {},
  render: ({state: {}, setState: Function}) => Node,
}

type State = {}

class Comp extends React.Component<Props, State> {
  static defaultProps = {
    initialState: {},
    render: () => null,
  }
  state = this.props.initialState
  setState = this.setState.bind(this)
  render() {
    const {state, setState} = this
    return this.props.render({state, setState})
  }
}

export default Comp
