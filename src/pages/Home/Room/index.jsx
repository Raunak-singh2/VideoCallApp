import React from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage=()=>{
    const {roomId}=useParams();

     const myRoomId=(element)=>{
        const appId=820700021;
        const serverSecret="5764363d2f9c036fd7d6d71b5d0b7e4a";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,
            roomId,
            Date.now().toString(),
            "raunak"
            );
        const zp=ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference,
            }
        })
     }

    return(
        <div className="room__app">
         <h1>This ours room pages.</h1>
         <div ref={myRoomId}/>
        </div>
    )
}
export default RoomPage;