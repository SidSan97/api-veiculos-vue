new Vue({
    el: '#app',
    data: {
      formData: {
        modelo: '',
        cor: '',
        ano: '',
        placa: '',
      },
      submitted: false,
    },
    methods: {
      async submitForm() {
        try {

          // Substitua a URL abaixo pela URL real da sua API
          const response = await axios.post('http://localhost/api-veiculos-laravel/public/api/cadastrar-veiculos', this.formData);
  
          // Exibe a resposta do servidor no console (pode ser removido em produção)
          console.log('Resposta do servidor:', response.data);
  
          // Defina submitted como true para mostrar a mensagem de sucesso
          this.submitted = true;
        } catch (error) {
          console.error('Erro ao enviar o formulário:', error);
        }
        console.log(this.formData)
      },
    },
});