// Copyright 2014, Renasar Technologies Inc.
/* jshint node: true */

'use strict';

var di = require('di');

module.exports = ProfileModelFactory;

di.annotate(ProfileModelFactory, new di.Provide('Models.Profile'));
di.annotate(ProfileModelFactory, new di.Inject(
        'Model'
    )
);

function ProfileModelFactory (Model) {
    return Model.extend({
        connection: 'mongo',
        identity: 'profiles',
        attributes: {
            name: {
                type: 'string',
                required: true
            },
            contents: {
                type: 'string',
                required: true
            }
        }
    });
}