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

    }
    function findAllUsers() {

    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {

    }
}