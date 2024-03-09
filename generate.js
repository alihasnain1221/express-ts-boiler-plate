#!/usr/bin/env node
const readline = require('readline');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const AdmZip = require('adm-zip');

// Function to prompt user questions and return their answers
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

// Checks if a directory is empty
function isDirectoryEmpty(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    return files.length === 0;
  } catch (error) {
    // If the directory does not exist, consider it "empty" for our purposes
    if (error.code === 'ENOENT') {
      return true;
    }
    throw error; // Rethrow if it's any other error
  }
}

// Main function to handle setup and extraction
async function main() {
  const packageManager = await askQuestion('Do you want to use yarn or npm? [yarn/npm] (Default: npm): ') || 'npm';
  const newFolderName = await askQuestion('Enter new folder name? (Default: express-ts-boiler-plate): ');
  const outputPathInput = await askQuestion('Enter your preferred output directory (absolute path) (Default: Current Folder): ');

  // Use the current working directory if no input is provided or the input is not an absolute path
  let basePath = outputPathInput && path.isAbsolute(outputPathInput) ? outputPathInput : process.cwd();
  let targetDirectory;

  if (!newFolderName && isDirectoryEmpty(basePath)) {
    targetDirectory = basePath;
  } else {
    targetDirectory = path.join(basePath, newFolderName || 'express-ts-boiler-plate');
  }

  // Create the target directory if it does not exist
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  console.log('Full Output Path: ', targetDirectory);

  // Ensure the output directory exists
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  // Path to the zip file
  const zipFilePath = path.join(__dirname, 'main.zip');

  try {
    // Extract main.zip to the specified output directory within the project root
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(targetDirectory, true);
    console.log('Boilerplate setup complete!');

    console.log(`Setting up in ${targetDirectory} using ${packageManager}...`);

    // Conditional installation command based on the user's package manager choice
    if (packageManager === 'yarn') {
      execSync('yarn install', { stdio: 'inherit', cwd: targetDirectory });
    } else {
      execSync('npm install', { stdio: 'inherit', cwd: targetDirectory });
    }
    console.log('Dependencies installed in the new directory!');
    return;
  } catch (error) {
    console.error('Error during script execution:', error);
    return;
  }
}

main();
