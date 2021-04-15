import React, { useEffect, useState } from 'react';
import './TestingZone.css';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BaseURL } from '../../api-calls/ApiRoutes';


const TestingZone = () => {
    const [hubConnection, setHubConnection] = useState(null);
    const [message, setMessage] = useState('');

    const [data, setData] = useState(null);

    useEffect(async () => {
        const createHubConnection = async () => {
            // create builder 
            const hubConnect = new HubConnectionBuilder()
                .withUrl(`${BaseURL}api/TestingHub`)
                .withAutomaticReconnect()
                .build();

            // try to connect and send ID to server
            try {
                await hubConnect
                    .start()
                    .then(() => {
                        if (hubConnect.connectionId) {
                            hubConnect.invoke("sendID", hubConnect.connectionId);
                        }
                    })
                    .then(() => {
                        hubConnect.on("ReceiveMessage", (user, message) => console.log(`${user} ${message}`))
                    });
            }
            catch (err) {
                console.log(err);
            }

            // set connection state
            setHubConnection(hubConnect);
        }
        
        createHubConnection();
    }, []);

    const tryMessage = () => {
        hubConnection.invoke("Sendmessage", hubConnection.connectionId, message);
    }

    return (
        // <div className="container-test-absolute">
        //     <div className="shark">
        //         <h1>I'm shark</h1>
        //     </div>
        // </div>

        <div className="container-100v">
            {/* <div className="testing-box shark">
                <h1>ama box</h1>
            </div>
            <div className="testing-box shark-sub">
                <h1>ama box</h1>
            </div>
            <div className="testing-box shark-dark">
                <h1>ama box</h1>
            </div>
            <div className="testing-box main-bg">
                <h1>ama box</h1>
    </div> */}

            <div onClick={tryMessage} style={{cursor: 'pointer'}}>Push message?</div>
            <input type="text" onChange={event => setMessage(event.target.value)} style={{border: '1px solid #FFF', color: 'white'}} />
        </div>
    )
}

export default TestingZone;