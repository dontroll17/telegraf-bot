import { Context } from 'telegraf';

export interface SessionData {
    question: boolean;
}

export interface BotCtx extends Context {
    session: SessionData;
}