import React from "react"
import { Link } from "gatsby"

import Button from "./Button"

function LinkButton({ to, children, ...rest }) {
  return (
    <Link to={to}>
      <Button as="div" {...rest}>
        {children}
      </Button>
    </Link>
  )
}

LinkButton.defaultProps = {
  variant: "tertiary",
  textAlign: "left",
}

export default LinkButton
