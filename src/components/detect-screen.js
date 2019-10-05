import React from 'react'
import qs from 'qs'

export default class DetectScreen extends React.Component {
    componentWillMount () {
        this.handleResize()
        window.addEventListener("resize", this.handleResize.bind(this))
    }

    handleResize () {
        const isDevicePC = !qs.parse(window.location.search)['?mobile'] && window.outerWidth >= 1024
        const isDeviceMobile = qs.parse(window.location.search)['?mobile'] || window.outerWidth <= 700
        
        this.setState({
            isDevicePC,
            isDeviceMobile
        })
    }
    
}