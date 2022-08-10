// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    this.document.getElementById('takeoff').addEventListener('click', function(){
        window.alert('Confirm that the shuttle is ready for takeoff.')
        if(document.getElementById('flightStatus').innerHTML === 'Space shuttle ready for takeoff'){
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight';
            document.getElementById('shuttleBackground').style.background = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = 10000; 
        }
    })
    this.document.getElementById('landing').addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').style.background = '';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    })
    this.document.getElementById('missionAbort').addEventListener('click', function(){
        window.alert('Confirm that you want to abort the mission.');
        document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
        document.getElementById('shuttleBackground').style.background = '';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    })
    this.document.getElementById('up').addEventListener('click', function(){
        document.getElementById('rocket').style.top += 10;
    })
    this.document.getElementById('down').addEventListener('click', function(){
        document.getElementById('rocket').style.bottom += 10;
    })
    this.document.getElementById('right').addEventListener('click', function(){
        document.getElementById('rocket').style.right += 10;
    })
    this.document.getElementById('left').addEventListener('click', function(){
        document.getElementById('rocket').style.left += 10;
    })
})