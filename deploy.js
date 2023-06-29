import { exec } from 'child_process';
import { appendFile, rm } from 'fs/promises';
import { publish } from 'gh-pages';

const execAsync = (command) => {
	return new Promise((resolve, reject) => {
		exec(command, (err) => {
			if (err) reject(err);
			resolve();
		});
	});
};

const FILE_DOES_NOT_EXIST_ERROR_CODE = 'ENOENT';
const run = async () => {
	try {
		await rm('./dist', { recursive: true });
	} catch (err) {
		if (err.code !== FILE_DOES_NOT_EXIST_ERROR_CODE) throw err;
	}
	await execAsync('npm run build');
	await appendFile('./dist/.nojekyll', '');
	await publish('dist');
};
run();
