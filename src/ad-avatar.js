import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom'
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];


const Avatars= () => {
   const history = useHistory();
   const [user, setUser] = useState(UserList[0]);
   const [color, setColor] = useState(ColorList[0]);
   const [gap, setGap] = useState(GapList[0]);

   const changeUser = () => {
       const index = UserList.indexOf(user);
       setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
       setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };

    const changeGap = () => {
        const index = GapList.indexOf(gap);
        setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
    }; 

   return (
       <div>
            <div style={{margin: 20}}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Avatar size="large" icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar size="small" icon={<UserOutlined />} />
            </div>
            <div style={{margin: 20}}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <Avatar shape="square" icon={<UserOutlined />} />
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </div>

            <div style={{margin: 30}}>
                <Avatar
                    style={{
                    backgroundColor: color,
                    verticalAlign: 'middle',
                    }}
                    size="large"
                    gap={gap}
                >
                    {user}
                </Avatar>
                <Button
                    size="small"
                    style={{
                    margin: '0 16px',
                    verticalAlign: 'middle',
                    }}
                    onClick={changeUser}
                >
                    ChangeUser
                </Button>
                <Button
                    size="small"
                    style={{
                    verticalAlign: 'middle',
                    }}
                    onClick={changeGap}
                >
                    changeGap
                </Button>
            </div>

            <div style={{margin: 20}}>
                <Button type="primary" onClick= {() => history.push("/")}>
                        Returning Home
                </Button>
            </div>

            <div style={{margin: 20}}>
                <Button type="primary" onClick= {() => history.push("/react-avatar")}>
                        Going React Avatar
                </Button>
            </div>

            <div style = {{margin: 20 }}>
                <Button type="primary"  onClick= {() => history.push("/avatar-preview")}>
                        going to Avatar Preview
                </Button>
            </div>   
      </div>
   );
}

export default withRouter(Avatars);

