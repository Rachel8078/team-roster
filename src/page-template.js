const generateEngineer = engineerInfo => {
    if (!engineerInfo) {
        return '';
    }
    return `
        <div class="card">
            <h1>${name}</h1>
            <h2>${position}</h2>
            <div class="container">
                <p id="id-number">ID: ${id}</p>
                <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </div>
    `;
};

const generateIntern = internInfo => {
    if (!internInfo) {
        return '';
    }
    return `
        <div class="card">
            <h1>${name}</h1>
            <h2>${position}</h2>
            <div class="container">
                <p id="id-number">ID: ${id}</p>
                <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p id="school">School: ${school}</p>
            </div>
        </div>
    `;
};

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
    </head>
  
    <body>
        <div class="card">
            <h1>${name}</h1>
            <h2>${position}</h2>
            <div class="container">
                <p id="id-number">ID: ${id}</p>
                <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
                <p id="school">School: ${school}</p>
                <p id="office-number">Office Number: ${office}</p>
            </div>
        </div>
    </body>
    </html>
    `;
  };