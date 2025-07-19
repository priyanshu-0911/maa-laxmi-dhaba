import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const clickDown = () => setClicked(true)
    const clickUp = () => setClicked(false)

    const hoverEnter = () => setHovering(true)
    const hoverLeave = () => setHovering(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", clickDown)
    window.addEventListener("mouseup", clickUp)

    // Optional: add hover effect to specific elements
    const hoverTargets = document.querySelectorAll(".cursor-hover")
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", hoverEnter)
      el.addEventListener("mouseleave", hoverLeave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", clickDown)
      window.removeEventListener("mouseup", clickUp)
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", hoverEnter)
        el.removeEventListener("mouseleave", hoverLeave)
      })
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed z-[9999] rounded-full transition-transform duration-200 ease-out
        ${clicked ? "scale-75 bg-yellow-300" : ""}
        ${hovering ? "scale-150 bg-yellow-400/70" : ""}
      `}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        width: "24px",
        height: "24px",
        backgroundColor: hovering ? "rgba(234,179,8,0.1)" : "transparent",
        border: "2px solid #facc15",
        boxShadow: "0 0 12px #facc15",
        transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : hovering ? 1.5 : 1})`,
      }}
    />
  )
}

export default CustomCursor
