new Vue({
    el: '#tabela',
    data () {
      return {
        info: null,
        apiData: [],
      };
    },
    mounted () {
      axios
        .get('http://localhost/api-veiculos-laravel/public/api/veiculos')
        .then(response => (
          this.apiData = response.data
          ))
        .catch(error => console.log(error))
    }
})