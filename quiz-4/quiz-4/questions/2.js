/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
 const getActiveUsers = (data) => {
    return new Promise((resolve) => {
        let res = data.filter((value) => !value.isSuspended);
        resolve(res);
    });
};

module.exports = getActiveUsers;
