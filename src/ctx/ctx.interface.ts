import { Context } from 'telegraf';

export interface SessionData {
    like: boolean;
}

export interface BotCtx extends Context {
    session: SessionData;
}