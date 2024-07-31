import React from 'react'
import { Button, Flex } from 'antd'
const App = ({ toggle, content }) => (
  <Flex wrap gap="small" className="site-button-ghost-wrapper">
    <Button type="primary" ghost onClick={toggle} className="custom-button">
      {content}
    </Button>
  </Flex>
)
export default App
