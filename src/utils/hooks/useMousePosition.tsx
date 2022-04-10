import { useEffect, useState } from "react"

export default function useCustomHookLogic() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    
    function handleMouseMove(event:MouseEvent) {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(
        () => {
            window.addEventListener("mousemove", handleMouseMove)

            return () => {
                window.removeEventListener("mousemove", handleMouseMove)
            }
        },
        []
    )

    return mousePosition;
}