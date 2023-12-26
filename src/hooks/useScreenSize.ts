import { useState, useEffect } from "react"

type ScreenSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const useScreenSize = (): ScreenSize => {
  const getScreenSize = (): ScreenSize => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      if (width <= 375) return "xxs"
      if (width > 375 && width < 640) return "xs"
      if (width >= 640 && width < 768) return "sm"
      if (width >= 768 && width < 1024) return "md"
      if (width >= 1024 && width < 1280) return "lg"
      if (width >= 1280 && width < 1536) return "xl"
      return "2xl"
    } else {
      return "2xl"
    }
  }

  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize())

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
