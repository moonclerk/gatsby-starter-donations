import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"

const DonationForm = () => {
  const [loaded, setLoaded] = useState(false)
  const scriptEl = useRef(null)

  // only add moonclerk.js when component mounts
  useEffect(() => {
    const checkoutScript = document.createElement("script")
    checkoutScript.id = "checkoutScript"
    checkoutScript.src = withPrefix("/moonclerk.js")
    scriptEl.current.appendChild(checkoutScript)
    setLoaded(true)
  }, [])

  // REPLACE ID FROM MOONCLERK FORM EMBED HTML
  return <Form id="mc3lg4rogyyklg" ref={scriptEl} />
}

export default DonationForm

const Form = styled.div`
  a {
    display: none;
  }
`
