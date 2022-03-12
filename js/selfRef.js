var obj = {
    showContext: function showContext() {
        this.log('teste');

        // Arrow Functions possuem Contexto Léxico
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);

/*      // Retorna um erro, por conta do contexto em que está sendo criada, 
        // podemos resolver com .bind(this) 
        // ou salvando o contexto em uma variavel 
        // var _that = this; (_that.log('after 1000ms');)

        setTimeout(function() {
            this.log('after 1000ms');
        }, 1000) */
    },
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext();