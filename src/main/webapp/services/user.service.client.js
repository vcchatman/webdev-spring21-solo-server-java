// this is the old way of creating a class
// functions declared inside greater function, almost like a class
// all variables below bound to instances of the function (lower)
function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/vcchatman/users';
    var self = this;

    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }).then(function (response) {
            return response.json()
        })
    }

    function findAllUsers() { // GET not mentioned as I think it's default
        return fetch(self.url).then(function (response) {
            return response.json()
        })
    }

    function findUserById(userId) {

    }

    function updateUser(userId, user) {
        return fetch(`${self.url}/${userId}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`,
            {method: 'DELETE'})
    }
}
