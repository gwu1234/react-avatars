import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./home"
import Avatars from "./ad-avatar"
import Layouts from "./layout"
import ReactAvatar from "./react-avatar"
import AvatarPreview from "./avatar-preview"
import MyAvatarEditor from "./avatar-editor"

export default function App() {
  return (
      <main>
        <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/avatar" component={Avatars} />
             <Route path="/layouts" component={Layouts} />   
             <Route path="/react-avatar" component={ReactAvatar} />  
             <Route path="/avatar-preview" component={AvatarPreview} />    
             <Route path="/avatar-editor" component={MyAvatarEditor} />              
        </Switch>
     </main>
  );
}