'use client'
import { usePathname } from "next/navigation"
export default function Location() {
    const PathName = usePathname()
  return (
    <div className="location-tack">
        
       Home{PathName}
    </div>
  )
}
