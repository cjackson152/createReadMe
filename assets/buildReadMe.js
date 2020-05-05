function createProjectReadMe() {
    return 'https://github.com/cjackson152/Slapps';

}

function buildReadMe(data) {
    return `
    ${data.projectName}
    Description
    ${data.projectDescription}
    Project(#project-name)

    Index
    
    Contact(#email)

    Install(#projectInstalls)

    Status(#projectStatus)

    Project Link(#projectLink)

    \
    ${data.email}\
    \
    ${data.projectInstalls}\
    \
    ${data.projectStatus}\
    \
    ${data.projectLink}\
    \


    `
}

module.exports = buildReadMe;