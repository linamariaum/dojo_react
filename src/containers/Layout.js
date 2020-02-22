import React from 'react'

class Layout extends React.Component {

    render(){
        return (
            <div>
                <nav>NAVBAR</nav>
                {this.props.children}
            </div>
        )
    }
}

export default Layout