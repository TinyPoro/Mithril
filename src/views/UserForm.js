var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", {
                onsubmit: function(e) {

                    e.preventDefault();
                    User.save();

                    let new_name = User.current_user.firstName + ' ' + User.current_user.lastName;

                    alert("User " + User.current_user.oldName + ' has been changed name to ' + new_name);
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", function(value) {User.current_user.firstName = value}),
                value: User.current_user.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {User.current_user.lastName = value}),
                value: User.current_user.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
}