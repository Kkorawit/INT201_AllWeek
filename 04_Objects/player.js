const player = {
    firstName : 'unknown',
    lastName : 'unknown',

    name: function(){
        return `${this.firstName} ${this.lastName}`
    }
    
}
player.firstName = 'boss';
console.log(player.name());