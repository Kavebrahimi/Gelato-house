import React, { type JSX, type PropsWithChildren } from "react";


const Container: React.FC<PropsWithChildren> = ({children}): JSX.Element => {
  return <div className="container mx-auto">{children}</div>
}

export default Container
