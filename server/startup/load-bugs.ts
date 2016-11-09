import { Bugs } from '../../imports/api/bugs';

export function loadBugs() {
    if (Bugs.find().cursor.count() === 0) {
        var bugs = [
            {
                'problem': 'Bug 1', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 2', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 3', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 4', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 5', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 6', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'bug 7', editColor: 'transparent', dateCreated: new Date(),
            }
        ];

        for (var i = 0; i < bugs.length; i++) {
            Bugs.insert(bugs[i]);
        }
    }

    console.log(Bugs.find().cursor.count())

};
// let tempID = Session.set('tempID', 'myId' + new Date().getTime());
let tempID = new Date().getTime();
export function getTempId() {

    return tempID;

};

export function setTempId() {

    tempID = new Date().getTime();
    console.log(tempID);

};