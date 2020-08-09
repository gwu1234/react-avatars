import React from "react";
import { withRouter } from 'react-router-dom'
import { Row, Col, Button } from 'antd';

const Home = ({history}) => {
   return (
       <div>
            <Row style = {{margin: 20 }}> 
                <Col span={24}>
                    <Button type="primary" onClick= {() => history.push("/avatar")}>
                        going to Ant Design Avatars
                    </Button>
                </Col>
            </Row>
            <Row style = {{margin: 20 }}>
                <Col span={24}>
                     <Button type="primary"  onClick= {() => history.push("/react-avatar")}>
                         going to React Avatar
                     </Button>
                </Col>
            </Row>
            <Row style = {{margin: 20 }}>
                <Col span={24}>
                     <Button type="primary"  onClick= {() => history.push("/layouts")}>
                         going to Layouts
                     </Button>
                </Col>
            </Row>    
            <Row style = {{margin: 20 }}>
                <Col span={24}>
                     <Button type="primary"  onClick= {() => history.push("/avatar-preview")}>
                         going to Avatar Preview
                     </Button>
                </Col>
            </Row>  
            <Row style = {{margin: 20 }}>
                <Col span={24}>
                     <Button type="primary"  onClick= {() => history.push("/avatar-editor")}>
                         going to Avatar Editor
                     </Button>
                </Col>
            </Row>    
      </div>
   );
}

export default withRouter(Home);

