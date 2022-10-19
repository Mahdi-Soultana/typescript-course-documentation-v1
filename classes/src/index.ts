class Player{
    public readonly first: string
    public last: string
    //this is in runtime
    // #score = 0
    //this is in typescript
    private score =0
    constructor(first:string, last:string) {
        this.first = first
        this.last = last
    }
    secretMethod():string {
        console.log('SECRET')
        return 'hehe'
    }
}


const elton = new Player('elton', 'nos')
//we can't change it  that because we have readonly
// elton.first=989
// elton.score
elton.secretMethod()
console.log(elton)