(function () {
    const users = [
        {id: 123, username: 'alice', firstName: 'Alice', lastName: 'Cooper'},
        {id: 234, username: 'bob', firstName: 'Bob', lastName: 'Dylan'},
        {id: 345, username: 'charlie', firstName: 'Charlie', lastName: 'Parker'},
        {id: 456, username: 'dan', firstName: 'Dan', lastName: 'Steely'}
    ]

    const rowTemplate = jQuery('.wbdv-template')
    const tbody = jQuery('tbody');
    renderUsers(users)

    function renderUsers (users) {
        for (var u in users) { // for loop retrieving all users
            const user = users[u]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden')
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-first-name').html(user.firstName);
            rowClone.find('.wbdv-last-name').html(user.lastName);
            tbody.append(rowClone);
        }
    }
})()