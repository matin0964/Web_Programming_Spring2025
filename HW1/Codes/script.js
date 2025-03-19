class FormulaEvaluator {
    constructor(formulaElement) {
        this.formulaElement = formulaElement;
        this.expression = formulaElement.getAttribute("evaluator");
        this.outputElement = document.createElement("div");
        this.outputElement.classList.add("formula-result");
        this.outputElement.setAttribute("contenteditable", "false");
        formulaElement.replaceWith(this.outputElement);
        this.inputs = this.extractInputs();
        this.bindEvents();
        this.updateResult();
    }

    extractInputs() {
        const regex = /[a-zA-Z_]+/g;
        const inputIds = this.expression.match(regex) || [];
        return inputIds.reduce((acc, id) => {
            const input = document.getElementById(id);
            if (input) acc[id] = input;
            return acc;
        }, {});
    }

    bindEvents() {
        Object.values(this.inputs).forEach(input => {
            input.addEventListener("input", () => this.updateResult());
        });
    }

    isValidNumber(value) {
        // Helper function to check if the input is a valid number
        return !isNaN(value) && value.trim() !== "";
    }

    updateResult() {
        try {
            const values = Object.fromEntries(
                Object.entries(this.inputs).map(([key, input]) => {
                    const value = input.value;
                    if (!this.isValidNumber(value)) throw new Error("Invalid input");
                    return [key, parseFloat(value)];
                })
            );
            const result = new Function(...Object.keys(values), `return ${this.expression}`)(...Object.values(values));
            this.outputElement.textContent = `Result: ${result.toFixed(2)}`;
        } catch (error) {
            this.outputElement.textContent = "فرمول نامعتبر";
        }
    }
}

function initializeFormulas() {
    document.querySelectorAll("formula").forEach(formulaElement => new FormulaEvaluator(formulaElement));
}

document.addEventListener("DOMContentLoaded", initializeFormulas);