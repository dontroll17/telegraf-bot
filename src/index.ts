import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { Command } from "./commands/commands.class";
import { Start } from "./commands/start";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { BotCtx } from "./ctx/ctx.interface";

class Bot {

    bot: Telegraf<BotCtx>;
    commands: Command[] =[];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<BotCtx>(this.configService.get('TOKEN'));
        this.bot.use(new LocalSession({
            database: 'sessions.json'
        }).middleware());
    }

    init() {
        this.commands = [new Start(this.bot)]
        for(const command of this.commands) {
            command.handle();
        }
        this.bot.launch();
        console.log('start')
    }

}

const bot = new Bot(new ConfigService());
bot.init();