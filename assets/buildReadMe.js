
function buildReadMe(data) {
    return `
    # Project(#projectName)
    ${data.projectName}
    # Description
    ${data.projectDescription}
    

    ## **Index**
    
    ### *[Contact](#email)*

    ### *[Instal](#projectInstalls)*

    ### *[Status](#projectStatus)*

    ### *[Project Link](#projectLink)*

    # **Contact**

    ${data.email}\
    

    # **Project required installs**

    ${data.projectInstalls}\
    

    # **Project Status**

    ${data.projectStatus}\
    

    # **Project Link**

    ${data.projectLink}\
    


    `
}

module.exports = buildReadMe;