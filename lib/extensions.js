// Copyright (c) 2015, EMC Corporation
// jshint freeze: false

'use strict';

var _ = require('lodash'),
    util = require('util');

/**
 * Provide default serialization for all Error objects.
 */
Object.defineProperty(Error.prototype, 'toJSON', {
    value: function () {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            context: _.merge(
                // Create a default context if none exists.
                this.context || {},
                // Copy extra fields into context.
                _.omit(
                    this,
                    ['stack', 'arguments', 'name', 'message', 'context']
                )
            )
        };
    },
    configurable: true
});

/**
 * Extension to String to allow for formatting of strings directly using
 * util.format.  "Hello %s".format("World") returns "Hello World".
 */
String.prototype.format = function () {
    return util.format.apply(
        null,
        _.flatten([
            this,
            Array.prototype.slice.call(arguments)
        ])
    );
};
