import TypingAnimation from "./typingAnimation"
import "./styles/banner.css"

export default function Banner() {

  return (
    <div className = "flex justify-center items-center bg-slate-100 h-1/3">
      <TypingAnimation/>
    </div>
  )
}