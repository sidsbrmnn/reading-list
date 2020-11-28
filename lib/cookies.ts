import cookie from 'cookie';
import { IncomingMessage } from 'http';

export function parseCookies(
    req?: IncomingMessage
): ReturnType<typeof cookie.parse> {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}
