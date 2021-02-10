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
var userService = new AdminUserServiceClient()
var users = [];

function createUser(user) {
    userService.createUser(user)
        .then(function (actualUserFromServer) {
            users.push(actualUserFromServer)
            renderUsers(users)
        })
}

function renderUsers(users) {
    $theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $theTableBody.append(`
                <tr class="wbdv-template wbdv-user wbdv-hidden">
                    <td class="wbdv-usernameFld">${user.username}</td>
                    <td class="wbdv-passwordFld">${user.password}</td>
                    <td class="wbdv-first-nameFld">${user.firstName}</td>
                    <td class="wbdv-last-nameFld">${user.lastName}</td>
                    <td class="wbdv-roleFld">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="pull-right">
                            <i class="wbdv-removeIcon fa-2x fa fa-times" id="${i}"></i>
                            <i class="wbdv-editIcon fa-2x fa fa-pencil" id="${user._id}"></i>
                        </span>
                    </td>
                </tr>
            `)
    }
    jQuery(".wbdv-removeIcon").click(deleteUser)
    jQuery(".wbdv-editIcon").click(selectUser)
}

function deleteUser(event) {
    console.log(event.target)
    var deleteBtn = jQuery(event.target) // this means jQuery can take both css classes and dom objects to act on
    var theClass = deleteBtn.attr("class")
    var userIndex = deleteBtn.attr("id")
    var theId = users[userIndex]._id
    console.log(theClass)
    console.log(theId)

    userService.deleteUser(theId)
        .then(function (status) {
                users.splice(userIndex, 1)
                renderUsers(users)
            }
        )
}

var selectedUser = null
function selectUser(event) {
    var selectBtn = jQuery(event.target)
    var theId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)
}

function updateUser() {
    console.log(selectedUser)
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
    $roleFld.val("")
}

function main() {
    $usernameFld = $(".wbdv-usernameFld") // $ is to show that these variables aren't storing primitive data types, they're storing objects that are bound to the DOM
    $passwordFld = $(".wbdv-passwordFld")
    $firstNameFld = $(".wbdv-firstNameFld")
    $lastNameFld = $(".wbdv-lastNameFld")
    $roleFld = $(".wbdv-roleFld")
    $searchIcon = $(".wbdv-searchIcon")
    $createIcon = $(".wbdv-createIcon")
    $updateIcon = $(".wbdv-updateIcon")
    $addUserBtn = jQuery("#wbdv-create-user") // to listening for incoming click event
    $theTableBody = jQuery("tbody")

    $updateIcon.click(updateUser)


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

    $addUserBtn.click(function () { // this is an anonymous/lambda function
        createUser({
            username: 'new_user',
            password: 'password1',
            firstName: "First",
            lastName: "Last",
            role: 'STUDENT'
        })
    })

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })
}

jQuery(main)
