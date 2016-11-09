import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MongoObservable } from 'meteor-rxjs';
// import { Bug } from '../models/bug.model';
// export const Bugs = new Mongo.Collection("bugs");
export const Bugs = new MongoObservable.Collection<Object>('bugs');


// Meteor.methods({
//     'bugs.insert'(bug) {

//         Bugs.insert(bug);
//     },
//     'bugs.remove'(bugId) {

//         const bug = Bugs.findOne(bugId);

//         Bugs.remove(bugId);
//     },
//     'bugs.update'(bugId, action) {

//         const bug = Bugs.findOne(bugId);

//         Bugs.update(bugId, action);
//     },
// });
