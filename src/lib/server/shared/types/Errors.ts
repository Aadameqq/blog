export class Errors extends Error {
	public message = '';
	private errorIndex = 1;
	constructor(public readonly errors: Error[]) {
		super();
		errors.forEach(this.addErrorToMessage);
	}

	public add = (error: Error) => {
		this.addErrorToMessage(error);
	};

	public isEmpty = () => {
		return !!this.message;
	};

	private addErrorToMessage = (error: Error) => {
		this.message += `${this.errorIndex}. ${error.message}\n`;
		this.errorIndex++;
	};
}
