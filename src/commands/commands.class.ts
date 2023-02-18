import { Telegraf } from "telegraf";
import { BotCtx } from "../ctx/ctx.interface";

export abstract class Command {
    constructor(public bot: Telegraf<BotCtx>) {}

    abstract handle(): void;
}