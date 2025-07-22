
/**
 * references:
 * https://softwareengineering.stackexchange.com/questions/398346/what-could-be-a-good-pattern-for-a-code-base-that-does-a-lot-of-a-b-testing
 * https://www.youtube.com/watch?v=115SeMub-P0
 * https://github.com/ArjanCodes/2022-abtest
 */

export class AB_OptimizeHeader {
    group: string;
    option: Record<string, IOption> = {};
    constructor(groupName: string) {
        this.option = {
            "1": new OptionA,
            "2": new OptionB,
            "3": new OptionC
        };
        this.group = groupName;
    }

    getOption() {
        return this.option[this.group];
    }
}


interface IOption {
    getHeaderCopy(): string;
}

class OptionA implements IOption {
    getHeaderCopy() {
        return 'AAA';
    }
}

class OptionB implements IOption {
    getHeaderCopy() {
        return 'BBB'
    }
}

class OptionC implements IOption {
    getHeaderCopy(): string {
        return 'CCC'
    }
}