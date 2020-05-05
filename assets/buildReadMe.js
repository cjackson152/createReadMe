function createProjectReadMe() {
    return 'https://github.com/cjackson152/Slapps';

}

function buildReadMe(data) {
    return `
    ${data.projectName}
    # Description
    ${data.projectDescription}
    # Project(#projectName)

    ## Index
    
    ### Contact(#email)

    ### Install(#projectInstalls)

    ### Status(#projectStatus)

    ### Project Link(#projectLink)

    # Contact

    ${data.email}\
    

    # Project required installs

    ${data.projectInstalls}\
    

    # Project Status

    ${data.projectStatus}\
    

    # Project Link

    ${data.projectLink}\
    


    `
}

module.exports = buildReadMe;