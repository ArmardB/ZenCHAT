'use strict';

const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FaceBookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
    let authProcessor = (accessToken, refreshToken, profile, done) => {
        // Find a user in the local mongodb instance using profile.id
        // If the user if found, return the user data using done()
        // If the user if not found, create one in the local db and return
        h.findOne(profile.id)
            .then(result => {
                if(result) {
                    done(null, result);
                }else {
                    // Create a new user and return
                    h.createNewUser(profile)
                        .then(newChatUser => done(null, newChatUser))
                        .catch(error => cosole.log('Error when creating new user'))
                }
            });
    }

    passport.use(new FaceBookStrategy(config.fb, authProcessor));
}