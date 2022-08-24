import { Server } from 'socket.io'
let rooms= [{name:"yeha0290291302190319"}]
const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on('create', function(room,playerName) {
        socket.join(room);
        if (rooms.filter((roomz)=> {return roomz.roomName===room}).length ==0 ){
          rooms.push({roomName:room,playerName1:playerName})
          socket.emit("XorO","X","","")
          
        }else{
          let currentroom=rooms.filter((roomz)=> {return roomz.roomName===room})
          socket.to(room).emit("playerJoined","joined")
          socket.emit("playerJoined","joined");
          socket.emit("XorO","O",currentroom[0].playerName1,playerName)
          socket.to(room).emit("XorO","X",currentroom[0].playerName1,playerName)
        }
    
        socket.on("play",function(nmb,playing){
          socket.emit("play",nmb,playing)
          socket.broadcast.to(room).emit("play",nmb,playing);
        })
        socket.on("reset",()=>{
          console.log("reset")
          socket.emit("reset","now")
          socket.broadcast.to(room).emit("reset","now");
        })
        socket.on("disconnect",()=>{
          socket.leave(room);
          rooms= rooms.filter((roomz)=>{return roomz.roomName!=room});
        })    
      });
    
    
    });
  }
  res.end()
}

export default SocketHandler