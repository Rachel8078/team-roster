// create the engineer card    
const generateEngineer = employees => {
    // get array of just Engineers
    let engineers = employees.filter(function(e) {
        return e.github;
    });

    // add html/card for all engineers on team
    const justEngineersArray = engineers.map(({ name, id, email, github }) => {
    return `
    <section class="col">
        <div class="card h-100">
         <div class="card-header">
            <h1 class="card-title">${name}</h1>
            <h2 class="card-subtitle">Engineer</h2>
         </div>  
         <div class="card-body">
            <p id="id-number">ID: ${id}</p>
            <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
            <p id="github">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
         </div>
        </div>
    </section>
    `;
    })
    
    if(!justEngineersArray) {
        return '';
    } else {
    return justEngineersArray.join('');
    }
};

// create the intern card    
const generateIntern = employees => {
    // get array of just Interns
    let interns = employees.filter(function(e) {
        return e.school;
    });

    // create html/card for each intern
    const justInternsArray = interns.map(({ name, id, email, school }) => {
    return `
    <section class="col">
        <div class="card h-100">
            <div class="card-header">
             <h1 class="card-title">${name}</h1>
             <h2 class="card-subtitle">Intern</h2>
            </div>
            <div class="card-body">
             <p id="id-number">ID: ${id}</p>
             <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
              <p id="school">School: ${school}</p>
            </div>
        </div>
    </section>
    `;
    });

    if(!justInternsArray) {
        return '';
    } else {
    return justInternsArray.join('');
    }
};

// export function to generate entire page
const generateTeamRoster = employees => {
    // destructure page data by section
    const { name, id, email, office, github, school } = employees

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="row row-cols-1 row-cols-md-3 g-4">
            <section class="col">
                <div class="card h-100">
                    <div class="card-header">
                        <h1 class="card-title">${employees[0].name}</h1>
                        <h2 class="card-subtitle">Manager</h2>
                    </div>  
                    <div class="card-body">
                        <p id="id-number">ID: ${employees[0].id}</p>
                        <p id="email">Email: <a href="mailto:${employees[0].email}">${employees[0].email}</a></p>
                        <p id="office-number">Office Number: ${employees[0].office}</p>
                    </div>
                </div>
            </section>
            ${generateEngineer(employees)}
            ${generateIntern(employees)}
            </main>
    </body>
    </html>
    `;
};

module.exports = generateTeamRoster;
