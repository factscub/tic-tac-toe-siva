## `Assumptions`

## `Problems `

<br />
Since socket.io is new for me, i had read the socket.io documentaion. I thought i understood the stuff that has to be used while building the application. But when i started using socket.io, that's the time i felt like i knew nothing. socket.io has many emit events . I was really confused with them. But after spending a couple of hours , i slowly started understanding clearly. 


## `Emit types used from socket.io `

1.To join a room. `socket.join()`\
2.To leave a room . `socket.leave()`\
3.To respond to an event . `socket.on()`\
4.To all clients in room1 and/or room2 . `io.to("room1").to("room2").emit(/* ... */)`\
5.To individual socketid . `io.to().emit(/* ... */)` \
6.To all clients in the current room except the sender. `socket.broadcast.to()emit(/* ... */)`

