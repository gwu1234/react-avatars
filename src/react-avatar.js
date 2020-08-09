import React from "react";
import { withRouter} from 'react-router-dom'
import { Button } from 'antd';
import md5 from "md5";
import Avatar from 'react-avatar';

const ReactAvatar= ({history}) => {
   const url = "http://www.gravatar.com/avatar/" + md5( "mr.guoping.wu@gmail.com");
   console.log (url);

   return (
       <div>
            <div style = {{margin: 30 }}>
                <div style ={{margin: 5}}> <Avatar name="Foo Bar" size="50" /> </div>
                <div style ={{margin: 5}}> <Avatar googleId="118096717852922241760" size="50" round={true} /> </div>
                <div style ={{margin: 5}}> <Avatar facebookId="100008343750912" size="50" /> </div>
                <div style ={{margin: 5}}> <Avatar githubHandle="sitebase" size={50} round="20px" /> </div>
                <div style ={{margin: 5}}>  <Avatar vkontakteId="1" size="50" /> </div> 
                <Avatar skypeId="sitebase" size="50" />
                <Avatar twitterHandle="sitebase" size="50" />
                <Avatar name="Wim Mostmans" size="50" />
                <Avatar name="Wim Mostmans" size="50" textSizeRatio={1.75} />
                <Avatar value="86%" size="50" />
                <div style ={{margin: 5}}> <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/> </div>
                <div style ={{margin: 5}}> <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" /></div>
                <div style ={{margin: 5}}> <Avatar name="Wim Mostmans" size="100"  /> </div>
                <div style ={{margin: 5}}> <Avatar size="50" src={url} /></div>

            </div>
            <div>
                <div style = {{margin: 10 }}>  
                    <Button type="primary" onClick= {() => history.push("/")}>     
                            going Home
                    </Button>
                </div>
                <div style = {{margin: 10 }}>         
                    <Button type="primary" onClick= {() => history.push("/avatar")}>
                            going to Ant Design Avatars
                    </Button>        
                </div>
                <div style = {{margin: 10 }}>
                    <Button type="primary"  onClick= {() => history.push("/layouts")}>
                            going to Layouts
                    </Button>        
                </div>

                <div style = {{margin: 10 }}>
                    <Button type="primary"  onClick= {() => history.push("/avatar-preview")}>
                        going to Avatar Preview
                    </Button>
                </div>   
            </div>
      </div>
   );
}

export default withRouter(ReactAvatar);
