import React, {
  Component,
} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

class UnstyledPageWrapper extends Component {
  render() {
    const {
      props,
    } = this
    const cn = classnames('scroll-wrapper', props.className)
    return (
      <div {...props} className={cn} />
    )
  }
}

const PageWrapper = styled(UnstyledPageWrapper)`
min-height: 100%;
`

export {
  PageWrapper,
}