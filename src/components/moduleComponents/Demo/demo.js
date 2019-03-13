import React, { Component, Fragment } from 'react';
import { Button } from 'antd';

class ButtonGhost extends Component{
  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Ghost Button</h3>
        <div style={{ background: 'rgb(47, 45, 165)', padding: '26px 16px 16px' }}>
          <Button type="primary">Primary</Button>
          <Button className="ml20" ghost>Default</Button>
          <Button className="ml20" type="dashed" ghost>Dashed</Button>
          <Button className="ml20" type="danger" ghost>danger</Button>
        </div>
      </Fragment>
    );
  }
}

export default ButtonGhost;
