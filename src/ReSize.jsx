import { useState, useEffect } from "react"

const ReSize = () => {


  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    
    // 清除事件監聽，避免內存洩漏
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(()=>{
    document.title = `Size: ${width} x ${height}`
  },[width, height])

  return (
    <div>
      <p>
        Window Width : { width }
      </p>
      <p>
        Window Height : { height }
      </p>
    </div>
  )
}

export default ReSize
