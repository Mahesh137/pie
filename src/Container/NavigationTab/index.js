import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

const NavigationTab = () => {
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <>
        <nav>
            <div>
            <NavLink to='/page-one'>Page One</NavLink>
            <NavLink to='/page-two'>Page Two</NavLink>
            <NavLink to='/page-three'>Page Three</NavLink>
            </div>
            <div>
            <QuestionCircleOutlined onClick={() => setModal2Open(true)}/>
            </div>
        </nav>
        <Modal
        title="Help Section"
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>Ingformation respective to content can be added here</p>
        <p>It could also be reused anywherer else.</p>
        <p>Events can also be triggered from here if required.</p>
      </Modal>
       </> 
    );
    };
    
    export default NavigationTab;