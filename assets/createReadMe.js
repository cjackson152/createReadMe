function createReadMe() {
    return 'https://github.com/cjackson152/Slapps';

}

function buildReadMe(data) {
    return `
    ${data.title}
    Description
    ${data.project-description}
    Project(#project-name)

    Index

    Contact(#email)

    Install(#project-installs)

    Status(#project-status)

    Project Link(#project-link)

    `
}

module.exports = buildReadMe;