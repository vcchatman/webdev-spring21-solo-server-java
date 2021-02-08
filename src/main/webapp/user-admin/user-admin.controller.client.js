
var users

var userService = new AdminUserServiceClient();

(function () {

    var addUserBtn = jQuery("#wbdv-create-user") // to listening for incoming click event

    // function addUser() { // this and addUserBtn.click below have same functionality but this one is not a lambda function
    //     createUser({
    //         username: 'NEW USER',
    //         firstName: "First",
    //         lastName: "Last",
    //         role: 'ADMIN'})
    // }
    // addUserBtn.click(addUser)

    addUserBtn.click(function () { // this is an anonymous/lambda function
        // alert("adding user")
        createUser({
            username: 'NEW USER',
            firstName: "First",
            lastName: "Last",
            role: 'ADMIN'})
    })

    // all these new methods, .click, .empty, .css, .html, etc. - they are all added by jQuery because now a jQuery objet

    const users = [

        {id: 123, username: 'alice', firstName: 'Alice', lastName: 'Coltrane', role: 'FACULTY'}, // these are JSON objects
        {id: 234, username: 'bob', firstName: 'Bob', lastName: 'Dylan', role: 'STUDENT'},
        {id: 345, username: 'charlie', firstName: 'Charlie', lastName: 'Parker', role: 'ADMIN'},
        {id: 456, username: 'dan', firstName: 'Dan', lastName: 'Steely', role: 'FACULTY'}
    ]

    var theHeading = jQuery("h1#user-admin-heading") //# means referencing id, . means referencing classes
    // theHeading.remove()
    // theHeading.html("User-Admin Editor")
    // theHeading.css("background-color", "blue")
    // theHeading.css("color", "yellow")
    theHeading
        .html("User-Admin Editor")
        .css("background-color", "blue")
        .css("color", "yellow")
        .append(" - Add/Remove Users")
        .append("<button>Go!</button>")
    // console.log(theHeading)

    var theTableBody = jQuery("tbody")

    function createUser(user) {
        users.push(user)
        renderUsers(users)
    }

    createUser({id: 567, username: 'edith', firstName: 'Edith', lastName: 'Piaf', role: 'STUDENT'})
    createUser({id: 678, username: 'frank', firstName: 'Frank', lastName: 'Sinatra', role: 'ADMIN'})
    createUser({id: 789, username: 'george', firstName: 'George', lastName: 'Harrison', role: 'FACULTY'})
    createUser({id: 91011, username: 'hank', firstName: 'Hank', lastName: 'Williams', role: 'STUDENT'})


    function renderUsers(users) {
        theTableBody.empty()
        for (var i = 0; i < users.length; i++) {
            var user = users[i]
            // theTableBody.remove()
            theTableBody
                .prepend(`<tr class="wbdv-template wbdv-user wbdv-hidden">
                    <td class="wbdv-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wbdv-first-name">${user.firstName}</td>
                    <td class="wbdv-last-name">${user.lastName}</td>
                    <td class="wbdv-role">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="pull-right">
                            <i class="fa-2x fa fa-times wbdv-remove"></i>
                            <i class="fa-2x fa fa-pencil wbdv-edit"></i>
                        </span>
                    </td>
                </tr>`)
        }
    }




    const rowTemplate = jQuery('.wbdv-template')
    const tbody = jQuery('tbody');
    renderUsers(users)

    // function renderUsers (users) {
    //     for (var u in users) { // for loop retrieving all users
    //         const user = users[u]
    //         const rowClone = rowTemplate.clone();
    //         rowClone.removeClass('wbdv-hidden')
    //         rowClone.find('.wbdv-username').html(user.username);
    //         rowClone.find('.wbdv-first-name').html(user.firstName);
    //         rowClone.find('.wbdv-last-name').html(user.lastName);
    //         tbody.append(rowClone);
    //     }
    // }
})()