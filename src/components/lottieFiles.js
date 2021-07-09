import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"

export const LottieFile = ({classNameProp}) => {
  
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../images/greenLottie.json"),
    })
    return () => {}
  }, [])

  return (
    <div className="lottie-container">
      <div className={classNameProp ? classNameProp :"lottie-container__file"} ref={container}></div>
    </div>
  )
}
export const LottieFileRound = ({classNameProp}) => {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../images/roundLottie.json"),
    })
    return () => {}
  }, [])

  return (
    <div className="lottie-container">
      <div className={classNameProp ? classNameProp :"lottie-container__file"} ref={container}></div>
    </div>
  )
}
