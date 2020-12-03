const aplicacao = new Vue({
    el: '#app',
    data () {
        return {
          info: null,
          generos: null,
          search: ''
        }
      },
      mounted () {
        axios
          .get('http://127.0.0.1:8000/api/movies/trending')
          .then(response => (this.info = response.data));
        
        axios
          .get('http://127.0.0.1:8000/api/genre')
          .then(response => (this.generos = response.data.genres));
      },
      methods:{
        getImagem(img){
            return 'https://image.tmdb.org/t/p/w500'+img;
        },
        loadGenero(event){
            if(event.target.value != 'Gênero'){
                axios
                .get('http://127.0.0.1:8000/api/movies/genre/'+event.target.value)
                .then(response => (this.info = response.data));
            }else{
                axios
                .get('http://127.0.0.1:8000/api/movies/trending')
                .then(response => (this.info = response.data));
            }
        },
        formatData(value) {
          return moment(value).format('DD/MM/YYYY')
        }
      }
});