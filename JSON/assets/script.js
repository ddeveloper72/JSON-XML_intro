const userObj =
    `[
                {
                    "name": "John",
                    "favoriteNumber": 22,
                    "isPharmacist": true,
                    "friends": [
                        {
                            "name": "Jane",
                            "favoriteNumber": 23,
                            "isPharmacist": false,
                            "friends": [
                                {
                                    "name": "Alice",
                                    "favoriteNumber": 24,
                                    "isPharmacist": true
                                },
                                {
                                    "name": "Bob",
                                    "favoriteNumber": 25,
                                    "isPharmacist": false
                                }
                            ]
                        }
                    ]
                }
            ]`;

// Parse the JSON string into a JavaScript object
const user = JSON.parse(userObj)[0];

// Get the content div
const contentDiv1 = document.getElementById('json-content');

// Create HTML content
const userInfo = `
                <h1>Users</h1>
                <h2>User Information</h2>
                <p>Name: ${user.name}</p>
                <p>Favorite Number: ${user.favoriteNumber}</p>
                <p>Is Pharmacist: ${user.isPharmacist}</p>
                <h3>Friends:</h3>
                <ul>
                    ${user.friends.map(friend => `
                        <li>
                            <p>Name: ${friend.name}</p>
                            <p>Favorite Number: ${friend.favoriteNumber}</p>
                            <p>Is Pharmacist: ${friend.isPharmacist}</p>
                            <h4>Friends:</h4>
                            <ul>
                                ${friend.friends.map(subFriend => `
                                    <li>
                                        <p>Name: ${subFriend.name}</p>
                                        <p>Favorite Number: ${subFriend.favoriteNumber}</p>
                                        <p>Is Pharmacist: ${subFriend.isPharmacist}</p>
                                    </li>
                                `).join('')}
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            `;

contentDiv1.innerHTML = userInfo;

console.log("1st Example:\n", objects = JSON.parse(userObj));
console.log("2nd Example:\nThe name of the users's friend's 2nd friend is: "
    + JSON.parse(userObj)[0].friends[0].friends[1].name
    + "\nThe users's friend's 1st friend is: "
    + JSON.parse(userObj)[0].friends[0].friends[0].name);