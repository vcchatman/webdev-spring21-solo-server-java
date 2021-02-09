// var users

// var userService = new AdminUserServiceClient();


var addUserBtn = jQuery("#wbdv-create-user") // to listening for incoming click event

addUserBtn.click(function () { // this is an anonymous/lambda function
        // alert("adding user")
        createUser({
            username: 'NEW USER',
            firstName: "First",
            lastName: "Last",
            role: 'ADMIN'
        })
    }
)

const users = [

    {username: 'alice', firstName: 'Alice', lastName: 'Coltrane', role: 'FACULTY'}, // these are JSON objects
    {username: 'bob', firstName: 'Bob', lastName: 'Dylan', role: 'STUDENT'},
    {username: 'charlie', firstName: 'Charlie', lastName: 'Parker', role: 'ADMIN'},
    {username: 'dan', firstName: 'Dan', lastName: 'Steely', role: 'FACULTY'}
]

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
                            <i class="fa-2x fa fa-times wbdv-remove" 
                               id="${i}"></i>
                            <i class="fa-2x fa fa-pencil wbdv-edit"
                               id="${i}"></i>
                        </span>
                    </td>
                </tr>
            `)
    }
    jQuery(".wbdv-remove")
        .click(function (event) {
            console.log(event.target)
            var deleteBtn = jQuery(event.target) // this means jQuery can take both css classes and dom objects to act on
            var theClass = deleteBtn.attr("class");
            var theId = deleteBtn.attr("id");
            console.log(theClass)
            console.log(theId)
            users.splice(theId, 1)
            renderUsers(users)
        })
}

var $usernameFld = $(".wbdv-usernameFld") // $ is to show that these variables aren't storing primitive data types, they're storing objects that are bound to the DOM
var $passwordFld = $(".wbdv-passwordFld")
var $firstNameFld = $(".wbdv-firstNameFld")
var $lastNameFld = $(".wbdv-lastNameFld")
var $roleFld = $(".wbdv-roleFld")
var $searchIcon = $(".wbdv-searchFld")
var $createIcon = $(".wbdv-createFld")
var $updateIcon = $(".wbdv-updateFld")

$createIcon.click(function () {
    var newUser = {
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val()
    }
    createUser(newUser)
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
    $roleFld.val("")
})
