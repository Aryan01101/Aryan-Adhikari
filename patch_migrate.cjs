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

let migrateCode = fs.readFileSync('migrate-data.js', 'utf-8');

// replace the comment with the code
const commentToReplace = "// Add certifications and projects data here...\n// (I'll truncate this for brevity, but you get the idea)";
let newMigrateCode = migrateCode.replace(commentToReplace, projectsCode + '\n\n' + certsCode);

// Add the migration functions
const functionsToAdd = `
async function migrateProjects() {
    console.log('🚀 Migrating projects data...');
    // Transform projects to match DB schema
    const mappedProjects = projectsData.map((p, i) => ({
        project_id: p.id,
        title: p.title,
        short_description: p.shortDescription,
        full_description: p.fullDescription,
        tech: p.tech,
        timeline: p.timeline,
        impact: p.impact,
        github_link: p.links.github,
        demo_link: p.links.demo,
        status: p.status,
        featured: p.featured,
        display_order: i
    }));

    const { data, error } = await supabase.from('projects').insert(mappedProjects);
    if (error) {
        console.error('❌ Error migrating projects:', error);
        throw error;
    }
    console.log(\`✅ Migrated \${mappedProjects.length} projects\`);
}

async function migrateCertifications() {
    console.log('📜 Migrating certifications data...');
    const mappedCerts = certificationsData.map((c, i) => ({
        name: c.name,
        issuer: c.issuer || 'Unknown',
        date_completed: c.date,
        credential_id: c.credentialId,
        skills: c.skills,
        in_progress: c.name.includes('In Progress') || c.date.includes('Expected'),
        display_order: i
    }));

    const { data, error } = await supabase.from('certifications').insert(mappedCerts);
    if (error) {
        console.error('❌ Error migrating certifications:', error);
        throw error;
    }
    console.log(\`✅ Migrated \${mappedCerts.length} certifications\`);
}
`;

newMigrateCode = newMigrateCode.replace('// ========================================', functionsToAdd + '\n// ========================================');

// Uncomment the function calls
newMigrateCode = newMigrateCode.replace('// await migrateProjects();', 'await migrateProjects();');
newMigrateCode = newMigrateCode.replace('// await migrateCertifications();', 'await migrateCertifications();');

fs.writeFileSync('migrate-data.js', newMigrateCode);
console.log("Migration script updated successfully.");
