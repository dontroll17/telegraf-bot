import { Telegraf, session } from "telegraf";
import { Command } from "./commands/commands.class";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { BotCtx } from "./ctx/ctx.interface";

class Bot {

    bot: Telegraf<BotCtx>;
    commands: Command[] =[];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<BotCtx>(this.configService.get('TOKEN'));
        this.bot.use(session());
    }

    init() {
        for(const command of this.commands) {
            command.handle();
        }
        this.bot.launch();
    }

}

const bot = new Bot(new ConfigService());
bot.init();