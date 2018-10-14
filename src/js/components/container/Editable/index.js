import React, {
  Component,
} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import {
  EditableText,
} from '@blueprintjs/core'

class Editable extends React.Component {
  render() {
    const {
      props,
    } = this
    return (
      <EditableText
        multiline={true}
        minLines={3}
        maxLines={12}
        {...props} />
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
