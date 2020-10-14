export default {
  _search: ``,
  //
  getFetch(){
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this._search}`)
    .then(res => res.json())

  },

  get search(){
    return this._search
  },
  set search(x){
    // console.log(this._search)
    return this._search = x
  }
}