const aplicacao = new Vue({
    el: '#app',
    data () {
        return {
          info: null,
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
      },
      methods:{
        getImagem(img){
            return 'https://image.tmdb.org/t/p/w500'+img;
        },
        formatData(value) {
          return moment(value).format('DD/MM/YYYY')
        }
      }
});