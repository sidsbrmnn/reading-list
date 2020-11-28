import cookie from 'cookie';
import { IncomingMessage } from 'http';

export default function (req?: IncomingMessage) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}
