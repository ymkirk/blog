/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Autho0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({element}) => {
    return (
        <Autho0Provider
            domain="dev-j58wguw3.us.auth0.com"
            clientId="JQUWxOcg4w2qDP4vhs5mUmM1Xj2evrdH"
            redirectUri="http:/localhost:8000/blog"
        >
            {element}
        </Autho0Provider>
    )
}