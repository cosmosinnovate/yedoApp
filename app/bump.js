const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function updateVersionAndBuildNumber() {
    // Path to app.json
    const appJsonPath = path.join(__dirname, 'app.json');

    // Read app.json
    const appJson = require(appJsonPath);

    // Increment version (simple approach for patch version)
    const versionParts = appJson.expo.version.split('.').map(part => parseInt(part, 10));
    versionParts[2] += 1; // Increment patch version
    const newVersion = versionParts.join('.');

    // Increment iOS build number
    const newIosBuildNumber = (parseInt(appJson.expo.ios.buildNumber, 10) + 1).toString();

    // Update app.json with new version and build number
    appJson.expo.version = newVersion;
    appJson.expo.ios.buildNumber = newIosBuildNumber;

    // Write updated app.json back to file
    fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));

    console.log(`Updated version to ${newVersion} and iOS build number to ${newIosBuildNumber}`);

    // Simulate an asynchronous operation with a delay before sending an interrupt signal
    // setTimeout(() => {
    //     console.log('Simulating an interrupt signal after async operation...');
    //     process.kill(process.pid, 'SIGINT');
    // }, 1000); // Delay of 5000 milliseconds (5 seconds)
}

updateVersionAndBuildNumber();
