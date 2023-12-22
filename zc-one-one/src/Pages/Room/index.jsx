import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

//  https://docs.zegocloud.com/article/14935 - for documentations.
// https://console.zegocloud.com/dashboard  - zegocloud account.

const Roompage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 41451720;
        const serverSecret = 'c3462189d7c38fad744dbc454e1c149b';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(),  // instead of USERID(for authentiation (from database)) - we are using Date.now()        
            "Sachin Nirate"      // UserName 
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showPreJoinView: true,

        });     
    };

    return <div>
        <div ref={myMeeting}/>
    </div>;
};

export default Roompage;