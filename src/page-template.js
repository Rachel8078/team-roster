// // create the engineer card    
// const generateEngineer = engineerInfo => {
//     // if no engineer return nothing
//     if (!engineerInfo) {
//         return '';
//     }

//     // if YES engineer, include info:
//     return `
//     <section class="col">
//         <div class="card h-100">
//          <div class="card-header">
//             <h1 class="card-title">${engineerName}</h1>
//             <h2 class="card-subtitle">Engineer</h2>
//          </div>  
//          <div class="card-body">
//             <p id="id-number">ID: ${engineerId}</p>
//             <p id="email">Email: <a href="mailto:${email}">${engineerEmail}</a></p>
//             <p id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
//          </div>
//         </div>
//     </section>
//     `;
// };

// // create an intern card
// const generateIntern = internInfo => {
//     if (!internInfo) {
//         return '';
//     }

//     return `
//     <section class="col">
//         <div class="card h-100">
//             <div class="card-header">
//              <h1 class="card-title">${internName}</h1>
//              <h2 class="card-subtitle">Intern</h2>
//             </div>
//             <div class="card-body">
//              <p id="id-number">ID: ${internId}</p>
//              <p id="email">Email: <a href="mailto:${email}">${internEmail}</a></p>
//               <p id="school">School: ${school}</p>
//             </div>
//         </div>
//     </section>
//     `;
// };

// export function to generate entire page
module.exports = templateData => {
    console.log(templateData);
    // destructure page data by section
    const { managerName, managerId, managerEmail, office, engineerName, engineerId, engineerEmail, github, internName, internId, internEmail, school } = templateData

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
                        <h1 class="card-title">${managerName}</h1>
                        <h2 class="card-subtitle">Manager</h2>
                    </div>  
                    <div class="card-body">
                        <p id="id-number">ID: ${managerId}</p>
                        <p id="email">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></p>
                        <p id="office-number">Office Number: ${office}</p>
                    </div>
                </div>
            </section>

        </main>
    </body>
    </html>
    `;
};