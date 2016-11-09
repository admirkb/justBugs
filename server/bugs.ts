
import { Meteor } from 'meteor/meteor';
import { Bugs } from '../imports/api/bugs';


Meteor.publish('bugs', function () {


    return Bugs.find({});


});

Meteor.methods({


    'bugs.insert'(bug) {
        var self = this;

        console.log("bug.inserted :" + self.connection.id)

        //bug.selfConnectionId =  self.connection.id;
        Bugs.insert(bug);
    },
    'bugs.remove'(bugId) {

        //const bug = Bugs.findOne(bugId);

        Bugs.remove(bugId);
    },
    'bugs.update'(bugId, action) {

        //const bug = Bugs.findOne(bugId);
        // console.log(action)
        Bugs.update(bugId, action);
        console.log(bugId)
        var updatedBug = Bugs.find({ _id: 'cLMdZHc4XacK8ahGy' });
        console.log(updatedBug.cursor.fetch())

        var returnedBug = updatedBug.cursor.fetch();
        //         return result;

        return returnedBug;

    },


});