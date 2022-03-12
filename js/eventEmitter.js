const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
            setTimeout(() => {
            this.emit('User logged', data);
        }, 1000);
    }
}
const users = new Users();

// users.once('User logged', data => { // loga apenas o primeiro
users.on('User logged', data => {
    console.log(data);
})

users.userLogged({ user: 'Gabriel' })
/* const emitter = new EventEmitter();
emitter.on('User logged', data => {
    console.log(data);
}); */
