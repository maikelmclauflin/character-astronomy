// import compose from './compose'
// import view from './view'
// const Content = compose(view)
// export {
//   Content,
// }
import React from 'react'
import {
  Layout,
  Breadcrumb,
} from 'antd'
import {
  headerHeight,
} from 'js/styles'
import styled from 'react-emotion'
import classnames from 'classnames'
const {
  Item: BreadcrumbItem,
} = Breadcrumb
const {
  Content: ContentLayout,
} = Layout
const UnstyledContent = ({
  children,
  path = [],
  className,
}) => (
  <ContentLayout className={classnames('content-wrapper', className)}>
    <Breadcrumb className='content-breadcrumbs'>
    {path.map((text) => (
      <BreadcrumbItem key={text}>{text}</BreadcrumbItem>
    ))}
    </Breadcrumb>
    <div className='actual-content' children={children} />
  </ContentLayout>
)
const StyledContent = styled(UnstyledContent)`
padding: ${headerHeight}px 50px 0;
> .content-breadcrumbs {
  margin: 16px 0;
}
> .actual-content {
  background: #fff;
  padding: 24px;
  min-height: 380px;
}
`
const Content = StyledContent
export {
  Content,
}