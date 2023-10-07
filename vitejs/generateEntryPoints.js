import path from 'path';
import fs from 'fs';

function generateEntrypoints(directory) {
    const entrypoints = {};

    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (file.endsWith('.js')) {
            const name = path.basename(file, '.js');
            entrypoints[name] = path.resolve(directory, file);
        }

        if (file.endsWith('.scss')) {
            const name = path.basename(file, '.scss');
            entrypoints[name] = path.resolve(directory, file);
        }
    }

    return entrypoints;
}


export default generateEntrypoints;
