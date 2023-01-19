import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="es">
      <Head />
      <body>
        <div id='root'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}

export default Document