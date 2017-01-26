// Gets out the company from the token
// The idea is to use it in the SQL queries to get the right data.
exports.getCompanyFromToken = function(token) {
    var tokenArray = token.split("."); // Put the 3 JWT parts in an array.
    var tokenPayload = tokenArray[1]; // The second part.
    var decoded = new Buffer(tokenPayload, 'base64').toString('ascii'); // Decode base64.
    console.log(decoded);
    var obj = JSON.parse(decoded); // JSON string into Object.
    console.log(obj.company);
    return parseInt(obj.company); // Return the company id as an integer.
};
