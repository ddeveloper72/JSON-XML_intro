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


console.log("3rd Example:\n", objects = JSON.parse(userObj));
console.log("4th Example:\nThe name of the users's friend's 2nd friend is: "
    + JSON.parse(userObj)[0].friends[0].friends[1].name
    + "\nThe users's friend's 1st friend is: "
    + JSON.parse(userObj)[0].friends[0].friends[0].name);

let user = JSON.parse(userObj)[0];
let contentDiv = document.getElementById('content');

let userInfo = `
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

contentDiv.innerHTML = userInfo;