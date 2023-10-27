class Movie {
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    get PG(){
        return this.rating
    }
    set PG (rating){
          this.rating = rating;
    }
}
let film = new Movie ("Casino Royale","Eon Productions","PG13");
console.log(film);