import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Link href={"/upload"}>Upload!</Link>
    </div>
  )
}

export default Header