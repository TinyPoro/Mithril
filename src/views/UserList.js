var m = require("mithril")
var User = require("../models/User")

module.exports = {
	oninit: User.loadList,
    view: function() {
        return m("ul.user-list", User.list.map(function(user) {
            return m("li.user-item", m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName))
        }))
    }
}