import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const tt = () => {
    const [key, setKey] = useState("home");

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm" />
                    <p>Tab 1 content</p>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm" />
                    <p>Tab lanncer </p>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm" />
                    <p>Abir</p>
                </div>
            </Tab>
        </Tabs>
    );
};

export default tt;
