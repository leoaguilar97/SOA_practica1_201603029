const evaluate = (expression) => {
    try {
        let cached_console_log = console.log;
        let str = "";
        console.log = (v) => str += "\n>> " + v;
        const result = eval(expression);
        console.log = cached_console_log;

        return str + "\n>> " + result;
    }
    catch (e) {
        return "Expresión incorrecta";
    }
};


module.exports = { evaluate };