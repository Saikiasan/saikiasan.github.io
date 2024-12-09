import React from "react"
import { useMediaQuery } from "react-responsive"

const MobileComponent = () => <div>Mobile View</div>
const DesktopComponent = () => <div>Desktop View</div>

const ResponsiveComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) // Mobile: width <= 767px

  return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>
}

export default ResponsiveComponent

// works fine...
