const fs = require('fs');
let mainContent = fs.readFileSync('src/main.ts', 'utf-8');

const projectsMatch = mainContent.match(/const projectsData = \[(.|\n)*?\];/);
const certsMatch = mainContent.match(/certifications: \[(.|\n)*?\],\n\n    research:/);

if (!projectsMatch || !certsMatch) {
    console.error("Could not find data in main.ts");
    process.exit(1);
}

let projectsCode = projectsMatch[0];
let certsCode = 'const certificationsData = [' + certsMatch[1] + '];';

// Transform projectsData slightly to match DB schema if needed
// Actually, let's just insert as is if the schema matches, but let's check schema.
