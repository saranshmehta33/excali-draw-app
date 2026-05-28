import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MWYyYTYyNC02OGM5LTRhYzUtYmEzOC1lNGQ5ZmQwZTQyYzAiLCJpYXQiOjE3Nzk5NTEyNDB9.tw-yIv-aTAkR4yUAGH9yC3KLqySflebkhJlIV5XDJGI`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}