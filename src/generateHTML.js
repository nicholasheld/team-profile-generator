function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" type="text/css" href="./style.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
        
        <main>
            <div class="container">
                <div class="row d-flex justify-content-center justify-content-between box-container">
                    <div class="col" id="box">
                        <h3>Manager</h3>
                        <p>Name: <span>${data[0].name}</span></p>
                        <p>ID: <span>${data[0].id}</span></p>
                        <p>Email: <span><a href="mailto: ${data[0].email}" title="Link to email address">${data[0].email}</a></span></p>
                        <p>Office Number: <span>${data[0].officeNumber}</span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Engineer</h3>
                        <p>Name: <span>${data[1].name}</span></p>
                        <p>ID: <span>${data[1].id}</span></p>
                        <p>Email: <span><a href="mailto: ${data[1].email}" title="Link to email address">${data[1].email}</a></span></p>
                        <p>GitHub: <span><a href="https://github.com/${data[1].github}" target="_blank" title="Link to engineer's GitHub profile">${data[1].github}</a></span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Engineer</h3>
                        <p>Name: <span>${data[2].name}</span></p>
                        <p>ID: <span>${data[2].id}</span></p>
                        <p>Email: <span><a href="mailto: ${data[2].email}" title="Link to email address">${data[2].email}</a></span></p>
                        <p>GitHub: <span><a href="https://github.com/${data[2].github}" target="_blank" title="Link to engineer's GitHub profile">${data[2].github}</a></span></p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center justify-content-between box-container">
                    <div class="col" id="box">
                        <h3>Intern</h3>
                        <p>Name: <span>${data[3].name}</span></p>
                        <p>ID: <span>${data[3].id}</span></p>
                        <p>Email: <span><a href="mailto: ${data[3].email}" title="Link to email address">${data[3].email}</a></span></p>
                        <p>School: <span>${data[3].school}</span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Intern</h3>
                        <p>Name: <span>${data[4].name}</span></p>
                        <p>ID: <span>${data[4].id}</span></p>
                        <p>Email: <span><a href="mailto: ${data[4].email}" title="Link to email address">${data[4].email}</a></span></p>
                        <p>School: <span>${data[4].school}</span></p>
                    </div>
                </div>
            </div>
    
        </main>
        
    </body>
    </html>`
}

module.exports = generateHTML;