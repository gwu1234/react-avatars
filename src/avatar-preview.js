import React from 'react'
import Avatar from 'react-avatar-edit'
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'


class AvatarPreview extends React.Component {
  constructor(props) {
    super(props)
    const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onImageLoad = this.onImageLoad.bind(this)
  }
  
  onClose() {
    console.log("onClose")
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    console.log("onCrop");
    this.setState({preview})
  }

  onImageLoad(image) {
    console.log("onImageLoad");
    this.setState({
       src: image,
       preview:image
    });
  }
  
  render () {
    const {history} = this.props;

    return (
      <div>
            <div>
                <Avatar
                  width={390}
                  height={295}
                  onCrop={this.onCrop}
                  onClose={this.onClose}
                  onImageLoad={this.onImageLoad}
                  src={this.state.src}
                />
                <img src={this.state.preview} alt="Preview" />
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
                    <Button type="primary"  onClick= {() => history.push("/react-avatar")}>
                        going to React Avatar
                    </Button>
                </div>   
            </div>
      </div>
    )
  }
}

export default withRouter(AvatarPreview);