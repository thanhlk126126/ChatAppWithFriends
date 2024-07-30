import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background: red; /* Fallback color */
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijGu_GHsGgjI-E4eY6dHAA3WspLu2qopMAg&s");
  background-size: cover; /* Adjust the image size to cover the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  color: white;
  height: 100vh;
`;


export default function Sidebar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
