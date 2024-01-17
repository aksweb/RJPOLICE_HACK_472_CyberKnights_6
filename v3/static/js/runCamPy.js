const { exec } = require('child_process');

const pythonScriptPath = '../python/open_ip_cam.py';


exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    console.log(`Python script output: ${stdout}`);
});
