const aplicacao = new Vue({
    el: '#app',
    data () {
        return {
          searchQuery: null,
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
      computed: {
        resultQuery(){
          if(this.searchQuery){
          return this.info.filter((item)=>{
            return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
          })
          }else{
            return this.info;
          }
        }
      },
      methods:{
        getImagem(img){
          if(img != '' && img != null){
            return 'https://image.tmdb.org/t/p/w500'+img;
          }else{
            return 'https://semantic-ui.com/images/wireframe/white-image.png';
          }
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