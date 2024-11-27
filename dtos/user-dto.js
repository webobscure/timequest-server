module.exports = class UserDto {
    email;
    id;
    verifiedEmail;
    dayStreak;
    points

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.verifiedEmail = model.verifiedEmail;
        this.dayStreak = model.dayStreak;
        this.points = model.points
    }
}