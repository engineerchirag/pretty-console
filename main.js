
import bc from 'beautiful-console';

export const prettifyConsole = (log) => {
    const {beautify, console: {log: print}} = bc
    print(beautify.blue(log));
}