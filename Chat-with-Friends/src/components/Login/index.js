import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div style={{  
      backgroundImage: "url(" + "https://thesol.edu.vn/datafiles/35996/upload/images/Tin%20t%E1%BB%A9c/Ch%E1%BB%AFa%20%C4%91%E1%BB%81%20IELTS/the-sol-ielts-speaking-part-1-chatting.png" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
  <Row justify='center' style={{ height: 800 }}>
    <Col span={8}>
      <Title style={{marginTop:"38%",textAlign: 'center', color:"red" }} level={1}>
        Chat With Friends
      </Title>
      <Button
        style={{width: '100%', marginBottom: 5,justifyItems: 'center' }}
        onClick={() => handleLogin(googleProvider)}
      >
        Đăng nhập bằng Google
      </Button>
      <Button
        style={{width: '100%' }}
        onClick={() => handleLogin(fbProvider)}
      >
        Đăng nhập bằng Facebook
      </Button>
    </Col>
  </Row>
    </div >
  );
}
