import { useEffect, useState } from 'react'

// Base64 encoded email: b2ZmaWNlQGNocmlzdG9waC1zdHVtcGYuY29t
export const useObfuscatedEmail = () => {
  const [emailHref, setEmailHref] = useState('#')

  useEffect(() => {
    // Decode the email only on the client side
    const encodedEmail = 'b2ZmaWNlQGNocmlzdG9waC1zdHVtcGYuY29t'
    setEmailHref(`mailto:${atob(encodedEmail)}`)
  }, [])

  return emailHref
} 