const aplicacao = new Vue({
    el: '#app',
    data () {
        return {
          info: null,
          cast: null,
          id: ''
        }
      },
      created() {
        let urlParams = new URLSearchParams(window.location.search);
            this.id = urlParams.get('id');
      },
      mounted () {
        axios
          .get('http://127.0.0.1:8000/api/movie/'+this.id)
          .then(response => (this.info = response.data));

        axios
          .get('http://127.0.0.1:8000/api/movie/cast/'+this.id)
          .then(response => (this.cast = response.data.cast));
      },
      methods:{
        getImagem(img){
          if(img != '' && img != null){
            return 'https://image.tmdb.org/t/p/w500'+img;
          }else{
            return 'https://semantic-ui.com/images/wireframe/white-image.png';
          }
        },
        formatData(value) {
          return moment(value).format('DD/MM/YYYY')
        }
      }
});