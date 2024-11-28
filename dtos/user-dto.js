module.exports = class UserDto {
    email;
    nickname;
    id;
    verifiedEmail;
    dayStreak;
    points;

    constructor(model) {
        this.email = model.email;
        this.nickname = model.nickname;
        this.id = model.id;
        this.verifiedEmail = model.verifiedEmail;
        this.dayStreak = model.dayStreak;
        this.points = model.points;
    }
}