export class FormValidationException extends Error {
    /**
     *
     */
    constructor(errorMessage: string) {
        super(errorMessage);
        Object.setPrototypeOf(this, FormValidationException.prototype);
    }
}