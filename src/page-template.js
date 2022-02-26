// create the engineer card    
const generateEngineer = engineerInfo => {
    // if no engineer return nothing
    if (!engineerInfo) {
        return '';
    }

    // if YES engineer, include info:
    return `
        <section id="engineer-card" class="card">
            <h1>${name}</h1>
            <h2>Engineer</h2>
            <div class="container">
                <p id="id-number">ID: ${id}</p>
                <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
             </div>
        </section>
    `;
};

// create an intern card
const generateIntern = internInfo => {
    if (!internInfo) {
        return '';
    }

    return `
        <section id="intern-card" class="card">
            <h1>${name}</h1>
            <h2>Intern</h2>
            <div class="container">
                <p id="id-number">ID: ${id}</p>
                <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p id="school">School: ${school}</p>
            </div>
        </section>
    `;
};

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { engineer, intern, ...main } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
      <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <section id="manager-card" class="card">
                <h1>${manager_name}</h1>
                <h2>Manager</h2>
                <div class="container">
                    <p id="id-number">ID: ${id}</p>
                    <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                    <p id="office-number">Office Number: ${office}</p>
                </div>
            </section>
                ${generateEngineer(engineer)}
                ${generateIntern(intern)}
        </main>
    </body>
    </html>
    `;
};