const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Define the directories to lint
const directories = [
  'src',
];

console.log('🔍 Starting ESLint auto-fix process...');

// Run ESLint with auto-fix for each directory
directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  
  // Check if directory exists
  if (fs.existsSync(fullPath)) {
    console.log(`\n🛠️  Fixing linting issues in ${dir}...`);
    try {
      // Use a more specific command with --ext to specify file extensions
      execSync(`npx eslint "${dir}" --ext .js,.vue --fix`, {
        stdio: 'inherit',
        cwd: __dirname
      });
      console.log(`✅ Successfully fixed linting issues in ${dir}`);
    } catch (error) {
      console.error(`❌ Some linting issues in ${dir} could not be automatically fixed`);
      console.error('   This is normal for certain types of errors that require manual fixing.');
    }
  } else {
    console.warn(`⚠️  Directory not found: ${dir}`);
  }
});

console.log('\n✨ ESLint auto-fix process completed!');
console.log('Note: Some issues may require manual fixing. Run "npm run lint" to see remaining issues.'); 