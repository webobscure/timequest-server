module.exports = class UserDto {
    email;
    id;
    verifiedEmail;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.verifiedEmail = model.verifiedEmail;
    }
}