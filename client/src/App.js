import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import './App.css';
import Map from "./components/mapSection/Map.js";
import Stats from "./components/statsSection/Stats.js";



const socket = io.connect('http://localhost:3001');



function App() {

    // Sets active region when clicked on map. Passed down to Stats.js
    const [region, setRegion] = useState("NONAME");

    // Sets region where points will be added from other players. Passed down to Stats.js
    const [regionName, setRegionName] = useState("");

    // Show map & remove loggin when entered room 
    const [enteredRoom, setEnteredRoom] = useState(false);

    // Socket.io
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")


    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit('join_room', room);

            setEnteredRoom(true)
        }
    };

    
    useEffect(() => {
        socket.on("distribute_point", (data) => {
            console.log(`DATA::: ${data.pointTo}`)
            addUniqueness(data.pointTo)
            //  setRegionName(data.pointTo)
            console.log(`APP-REGION::: ${regionName}`)
        })
    }, [socket])


    // Giving the region a unique number so stats.js always render when region is passed down.
    function addUniqueness(region) {     
        const name = `${region}_${Math.floor(Math.random() * 100000)}`
        console.log(`NAME::: ${name}`)
        setRegionName(name)
    }
   
 


    return (
        <div className="outer_container">


            <div className="join-room" style={{ display: enteredRoom ? "none" : "block" }}>
                <h3>Join A Chat</h3>
                <input type="text" placeholder="Robin..." onChange={(event) => { setUsername(event.target.value) }} />
                <input type="text" placeholder="Room ID..." onChange={(event) => { setRoom(event.target.value) }} />
                <button onClick={joinRoom}>Join A Room</button>
            </div>


            
            <div className="main_container" style={{ display: enteredRoom ? "inherit" : "none" }}>
                <div className="map_container">
                    <Map clicking={region => setRegion(region)} />
                </div>

                <div className="stats_container">
                    <Stats socket={socket} username={username} room={room} regionName={region} ReceivedRegionName={regionName} />
                </div> 
            </div>

            <div><p>{region}</p></div>


        </div>



    );

    
        
    

  



}

export default App;
