const SerialPort = require("chrome-apps-serialport").SerialPort;
// const SerialPort = require("serialport");
// const Readline = require("@serialport/parser-readline");

const webSocketPort = 3002;
let i = 0;

// SerialPort.parsers = {
//     ByteLength: require('@serialport/parser-byte-length'),
//     CCTalk: require('@serialport/parser-cctalk'),
//     Delimiter: require('@serialport/parser-delimiter'),
//     Readline: require('@serialport/parser-readline'),
//     Ready: require('@serialport/parser-ready'),
//     Regex: require('@serialport/parser-regex'),
// }
// SerialPort.Binding = require('@serialport/bindings')

var comPort;
var parser; // = comPort.pipe(new Readline())
// var comPort = new SerialPort('COM7', {autoOpen:false,baudRate:9600,dataBits: 8,stopBits: 1});

const http = require("http").createServer();

const control = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

control.on("connection", (socket) => {
  socket.on("requestPorts", (callbackPorts) => {
    // SerialPort.list().then((ports) => {
    //   callbackPorts({
    //     value: ports,
    //   });
    // });

    console.log(chrome.serial.getDevices);
  });
  // socket.on("setPort", (port, baud) => {
  //   comPort = SerialPort(port, {
  //     baudRate: baud,
  //   });
  //   parser = comPort.pipe(new Readline());
  //   parser.on("data", (data) => {
  //     console.log(data);

  //     socket.emit("readData", data);
  //   });
  // });
  // socket.on("serialWrite", (data) => {
  //   comPort.write(data);
  // });
});

http.listen(webSocketPort, () => {
  console.log("server is listening on localhost:" + webSocketPort);
});
