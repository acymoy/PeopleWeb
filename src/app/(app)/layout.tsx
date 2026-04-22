import type React from 'react'

interface LandingPageProps {
  children: React.ReactNode
}

const LandingPage = ({ children }: LandingPageProps) => {
  return <>{children}</>
}

export default LandingPage
