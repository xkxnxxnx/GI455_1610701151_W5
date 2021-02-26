var websocket = require('ws');
var wss = new websocket.Server({port:5500}, ()=>{
    console.log("pisoot Server is running");
} );


var wsList = [];



wss.on("connection",(ws)=>{

    console.log("client commevted.");
    wsList.push(ws);

    ws.on("message",(data)=>{
        console.log("send from client :"+ data);
        Boardcast(data);
    });


   ws.on("close", ()=>{
       console.log("clinent disconnected.");
       wsList = ArrayRemove(wsList, ws);
   });
});

function ArrayRemove(arr, value)
{
    return arr.filter((element)=>{
        return element != value;
    })
}



function Boardcast(data)
{
    for(var  i = 0; i < wsList.length; i++)
    {
        wsList[i].send(data);
    }
}


//var callbackInitServer = 

/* function test(a, callback)
{
    callback();
}

var callback = ()=>{

}

test(5, callbackTest); */
