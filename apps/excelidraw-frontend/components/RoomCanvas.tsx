"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId} : {roomId : string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMWI2NDZiNC0yMTU4LTRkOGMtYWVmZi0yZTI0NDMwOGUzZjEiLCJpYXQiOjE3ODEyNDY1OTF9._2UfcsPEqhjAmcyF1CKCDEuAnmoZBODb9CUdUaqku0E`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }

    }, []);

    

    if (!socket) {
        return <div>
            Connecting to server....
        </div>
    }

    return <div>
       <Canvas roomId={roomId} socket={socket}/> 
    </div>
}