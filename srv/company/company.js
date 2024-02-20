class Company extends cds.ApplicationService {
    init() {
        const { Users } = this.entities
        this.after("READ", checkFullStack(checkAuth))
        return super.init()
    }
}

function checkAuth(Users) {
    return function (req, res) {
        const aUsers = req

        for (let i = 0; i < aUsers.length; i++) {
            aUsers[i].authorized = true;
        }

    }
}

export default Company