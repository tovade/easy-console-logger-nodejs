class logger {
    /**
     * @param {String} [text] - text in here
     */
    static async log(text) {
        if(!text) throw new TypeError("Please provide text!")
        console.log(text)
    }
}
module.exports = logger;