import React from 'react'
import { StyleSheet, View } from 'react-native'
import Pdf from './Pdf'
import WebView from './WebView'

const CustomPage = props => {
  return (
    <>
      <WebView
        style={styles.content}
        contain
        source={{
          html: `
        <html style="background-color:rgba(0,0,0,0);">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
        
        <style>
          img{
            width:100%;
          }
        </style>
        
        </head>
        <body style="margin:0">
          <div>${props.desc}</div>
          <div>
          <img style="margin-top:15px;margin-bottom:15px" src="${props.headerImageUrl}">
          </div>
          ${props.content}
          </body>
          </html>`,
        }}
      />
      <View style={{ width: '100%', aspectRatio: 0.8 }}>
        <Pdf src={props.pdfFileUrl} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
  },
  headerImage: {
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  content: {
    marginTop: 10,
  },
})

export default CustomPage
