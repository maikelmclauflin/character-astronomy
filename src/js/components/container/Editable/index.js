import React, {
  Component,
} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

class Editable extends React.Component {
  componentDidMount() {
    this.setText()
  }
  componentDidUpdate() {
    this.setText()
  }
  shouldComponentUpdate(nextProps) {
    return this.props.editable !== nextProps.editable;
  }
  setText() {
    this.refEl.innerHTML = this.props.text;
  }
  setRef = (el) => {
    this.refEl = el
  }
  render() {
    const {
      props,
    } = this
    const {
      className,
      onChange,
      editable,
    } = props
    const cn = classnames("editable", className)
    return (
      <div
        {...(editable ? {
          contentEditable: true,
        } : {})}
        className={cn}
        onInput={onChange}
        ref={this.setRef}
      >
      </div>
    )
  }
}
const StyledEditable = styled(Editable)`
&:focus {
  outline: none;
}
`
export {
  StyledEditable as Editable,
}
