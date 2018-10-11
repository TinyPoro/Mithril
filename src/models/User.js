var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then(function(result) {
            User.list = result.data
        })
    },

    current_user: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            User.current_user = result;
            User.current_user.oldName = User.current_user.firstName + ' ' + User.current_user.lastName;
        })
    },

    save: async function() {
        await m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current_user.id,
            data: User.current_user,
            withCredentials: true,
        })

        return User.loadList();
    }
}

module.exports = User
