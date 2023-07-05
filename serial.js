const { SerialPort } = require('serialport')
const config = require('./configs/config')

const port = new SerialPort({
    path: config.puertocom,
    baudRate: 115200,
  })

// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
})

port.on('data', function (data) {
    //console.log('Data:', data.toString())
    decodificaCedula(data.toString())
})

port.on('open', function() {
    console.log("Puerto abierto")
  })


function decodificaCedula(datos){
   
}