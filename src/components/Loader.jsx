import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <div className="h-screen w-full flex items-center justify-center bg-black text-yellow-400 text-xl font-bold">
      <ClipLoader size={60} color="#facc15" loading={loading} />
      <span className="ml-4">Preparing Dhaba Delight...</span>
    </div>
  ) : (
    children
  )
}

export default Loader
