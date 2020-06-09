/**
 * #############################
 * IS INPUT STRING A VALID EMAIL
 * #############################
 * There are so many parameters that can go into email validation that it
 * becomes close to impossible to do accurate checks. The point however is to
 * provide the end user with some basic assistance so that no mistakes are 
 * made.
 * 
 * The real check should always be a confirmation email with token that has to 
 * be confirmed by the end user.
 * 
 * The basic validation check is would be:
 * - any string that is entered at least once, before the '@'
 * - any string that is entered at least once, after the '@'
 * 
 * Example: 'john.doe@localhost' is a valid email
 * Example: 'john.john@doe.doe' is a valid email
 * Example: 'john@doe.com' is a valid email
 */
function isEmail(str){
    return /.+@.+/.test(str)
}