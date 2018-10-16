import {
  Layout,
} from 'antd'
const {
  Footer: FooterLayout,
} = Layout
const styles = { textAlign: 'center' }
export const Footer = () => (
  <FooterLayout style={styles}>
    Ant Design ©2018 Created by Ant UED
  </FooterLayout>
)