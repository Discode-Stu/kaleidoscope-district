import React from "react"

import { ReactComponent as Instagram } from "../images/instagram.svg"
import { ReactComponent as Etsy } from "../images/etsy.svg"

import banner from "../images/banner.png"
import scope from "../images/scope.png"
import { LottieFile } from "./lottieFiles"
import Book from "./book"
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__top">
        <img className="homepage__top__left-img" src={banner} alt="k" />
        <div className="homepage__top__KD">
          <div className="homepage__top__KD__title">Kaleidoscope District</div>
          <div className="homepage__top__KD__lottie-right">
            <LottieFile classNameProp="lottie-container__homepage" />
          </div>
          <div className="homepage__top__KD__lottie-left">
            <LottieFile classNameProp="lottie-container__homepage" />
          </div>
        </div>
        <img src={banner} alt="k" />
      </div>
      <div className="homepage__bottom">
        <div className="homepage__bottom__link">
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/thekaleidoscopedistrict/"
          >
            <Instagram />
            Instagram
          </a>
        </div>
        <div className="homepage__bottom__link">
          <a
            className="etsy"
            target="_blank"
            rel="noreferrer"
            href="https://www.etsy.com/shop/kaleidoscopedistrict/"
          >
            <Etsy />
          </a>
        </div>
      </div>
      <Book />
      {/* <img className="homepage__image" alt="scope" src={scope} /> */}
    </div>
  )
}
