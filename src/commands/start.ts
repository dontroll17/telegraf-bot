import { Telegraf, Markup } from "telegraf";
import { BotCtx } from "../ctx/ctx.interface";
import { Command } from "./commands.class";

export class Start extends Command {
    
    constructor(bot: Telegraf<BotCtx>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            
            ctx.reply('Yes?', Markup.inlineKeyboard([
                Markup.button.callback('Yes', 'Yes'),
                Markup.button.callback('No', 'No'),
            ]))
        });

        this.bot.action('Yes', (ctx) => {
            ctx.session.question = true;

            ctx.editMessageText('Well');
        });

        this.bot.action('No', (ctx) => {
            ctx.session.question = false;

            ctx.editMessageText('Bad');
        });
    }
}