new Vue({
  el: '#app',
  data: {
      parametro: '',
      valor: '',
      submitted: false,
      apiData: [],
  },
  methods: {
      buscarCarros() {
          axios
              .get(`http://localhost/api-veiculos-laravel/public/api/veiculos/${this.parametro}/${this.valor}`)
              .then(response => {
                  this.apiData = response.data;
                  this.submitted = true;
              })
              .catch(error => console.log(error));
      },
  },
});