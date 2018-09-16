"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: '1', name: 'Queen Of Pain', email: 'qop@dota.com' },
    { id: '2', name: 'Mirana', email: 'potm@dota.com' },
    { id: '3', name: 'Juggernaut', email: 'yurnero@dota.com' },
    { id: '4', name: 'Rikimaru', email: 'riki@dota.com' },
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id);
            let user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}
exports.User = User;
