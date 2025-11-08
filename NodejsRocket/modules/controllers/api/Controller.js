// Model
const Course = require(`${config.path.model}/Course`);

module.exports = class Controller {
    constructor() {
        this.model = { Course }
    }
}
