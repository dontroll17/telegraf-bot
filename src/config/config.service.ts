import { DotenvParseOutput, config } from "dotenv";
import { IConfigService } from "./config.interface";

const throwErr = (string: string) => {
    throw new Error(string);
}

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;
    constructor() {
        const { error, parsed } = config();
        if(error) {
            throwErr('.env not found');
        }

        if(!parsed) {
            throwErr('empty .env');
        }
        
        //@ts-ignore
        this.config = parsed;
    }

    get(key: string): string {
        const res = this.config[key];

        if(!res) {
            throwErr('Not found key');
        }

        return res;
    }
}