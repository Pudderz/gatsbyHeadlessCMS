import React from 'react'
import { Helmet } from 'react-helmet'

export default function Metadata() {
    return (
        <Helmet>
                <meta charSet="utf-8" />
                <title>Gatsby Blog</title>
                <link rel="canonical" href={`${process.env.GATSBY_SITEURL}`} />
                <meta name="description" content="Gatsby blog template site" />
                <html lang="en" />
        </Helmet>
    )
}
