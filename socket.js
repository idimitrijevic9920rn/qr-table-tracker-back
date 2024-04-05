let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
              origin: 'http://localhost:5173',
              methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
            }
          })
        return io;
    },
    getIO: () => {
        if(!io){
            throw new Error('Socket.io is not initialized')
        }
        return io;
    }
}