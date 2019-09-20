

import React from "react";
import {
    HeaderWrapper
} from "../home_style"; 


class Header extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <HeaderWrapper>
                            Todo App
                            
                        </HeaderWrapper>
                    </div>
                   
                </div>
            </div>
               
        )
    }
}

export default Header;