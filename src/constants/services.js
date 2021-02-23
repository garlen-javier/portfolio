import React from "react"
import { FaMobileAlt, FaGamepad, FaServer } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaMobileAlt className="service-icon" />,
    title: "Mobile App",
    text: `Native Android app made with java/kotlin and IOS app made with objective-c/swift or Cross-platform app made with flutter.`,
  },
  {
    id: 2,
    icon: <FaGamepad className="service-icon" />,
    title: "Game Development",
    text: `2D or 3D games made with cocos2d-x or Unity3D. Additional optimization and plugins for mobile deployment can be applied.`,
  },
  {
    id: 3,
    icon: <FaServer className="service-icon" />,
    title: "Back-End",
    text: `APIs or Microservices primarily build with Golang and MongoDB. Server-side integration with AWS EC2.`,
  },
]
