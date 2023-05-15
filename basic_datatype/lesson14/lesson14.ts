enum API_STATUS {
    PENDDING,
    FULFILLED,
    REJECTED
    //PROMISE
}

let apiState = API_STATUS.FULFILLED // apiState = 1

enum USER_ROLE {
    ADMIN = "ADMIN",
    OWNER = "OWNER",
    CUSTOMER = "CUSTOMER"
}

let userRole = USER_ROLE.ADMIN // userRole = "ADMIN"

console.log(userRole)