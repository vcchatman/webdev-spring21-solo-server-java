var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $searchIcon
var $createIcon
var $updateIcon
var $addUserBtn
var $theTableBody
var userService = new AdminUserServiceClient();

var users = [];

function createUser(user) {
    users.push(user)
    renderUsers(users)
}

function deleteUser(event) {
    console.log(event.target)
    var deleteBtn = jQuery(event.target) // this means jQuery can take both css classes and dom objects to act on
    var theClass = deleteBtn.attr("class");
    var theId = deleteBtn.attr("id");
    console.log(theClass)
    console.log(theId)
    users.splice(theId, 1)
    renderUsers(users)

}

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
        .click(function (deleteUser) {
        })
}

function main() {
    $usernameFld = $(".wbdv-usernameFld") // $ is to show that these variables aren't storing primitive data types, they're storing objects that are bound to the DOM
    $passwordFld = $(".wbdv-passwordFld")
    $firstNameFld = $(".wbdv-firstNameFld")
    $lastNameFld = $(".wbdv-lastNameFld")
    $roleFld = $(".wbdv-roleFld")
    $searchIcon = $(".wbdv-searchFld")
    $createIcon = $(".wbdv-createFld")
    $updateIcon = $(".wbdv-updateFld")
    $addUserBtn = jQuery("#wbdv-create-user") // to listening for incoming click event
    $theTableBody = jQuery("tbody")

    $createIcon.click(() => {
        createUser({
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        })
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")
    })

    // $addUserBtn.click(function () { // this is an anonymous/lambda function
    //     // alert("adding user")
    //     createUser({
    //         username: 'NEW USER',
    //         firstName: "First",
    //         lastName: "Last",
    //         role: 'ADMIN'
    //     })
    // })
    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })
}

jQuery(main)
