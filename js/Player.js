class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }

    getCount(){
    var playerCountref = database.ref('Count');
    playerCountref.on("value", function(data){
        myPlayerCount = data.val();
   })
    }

    updatecount(Count){
        database.ref('/').update({
            Count:Count
        })
    }
    update(){
        var playerIndex = "Players/Player"+this.index;
        database.ref(playerIndex).set({
            Name:this.name,
            Distance : this.distance
        })

    }

    static getPlayerInfo(){
        var playerinforef = database.ref("Players");
        playerinforef.on("value",(data)=>{
        allPlayers = data.val();
        
        })
    }
}