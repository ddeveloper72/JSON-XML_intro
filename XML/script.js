// sample XML code

const xmlString = `
<users>
    <user>
        <name>John</name>
        <favoriteNumber>22</favoriteNumber>
        <isPharmacist>true</isPharmacist>
        <friends>
            <friend>
                <name>Jane</name>
                <favoriteNumber>23</favoriteNumber>
                <isPharmacist>false</isPharmacist>
                <friends>
                    <friend>
                        <name>Alice</name>
                        <favoriteNumber>24</favoriteNumber>
                        <isPharmacist>true</isPharmacist>
                    </friend>
                    <friend>
                        <name>Bob</name>
                        <favoriteNumber>25</favoriteNumber>
                        <isPharmacist>false</isPharmacist>
                    </friend>
                </friends>
            </friend>
        </friends>
    </user>
</users>
`;

// Parse the XML string into a DOM object
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

// Extract the data from the XML
const users = xmlDoc.getElementsByTagName('user');

// Get the content div
const contentDiv = document.getElementById('content');

// Create HTML content
let htmlContent = "<h1>Users</h1>";

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const name = user.getElementsByTagName('name')[0].textContent;
    const favoriteNumber = user.getElementsByTagName('favoriteNumber')[0].textContent;
    const isPharmacist = user.getElementsByTagName('isPharmacist')[0].textContent;
    const friends = user.getElementsByTagName('friend');

    let friendsArray = [];
    for (let j = 0; j < friends.length; j++) {
        const friend = friends[j];
        const friendName = friend.getElementsByTagName('name')[0].textContent;
        const friendFavoriteNumber = friend.getElementsByTagName('favoriteNumber')[0].textContent;
        const friendIsPharmacist = friend.getElementsByTagName('isPharmacist')[0].textContent;

        friendsArray.push({
            name: friendName,
            favoriteNumber: friendFavoriteNumber,
            isPharmacist: friendIsPharmacist
        });
    }

    const userInfo = `
        <h2>User Information</h2>
        <p>Name: ${name}</p>
        <p>Favorite Number: ${favoriteNumber}</p>
        <p>Is Pharmacist: ${isPharmacist}</p>
        <h3>Friends:</h3>
        <ul>
            ${friendsArray.slice(0, 1).map(friend => `
                <li>
                    <p>Name: ${friend.name}</p>
                    <p>Favorite Number: ${friend.favoriteNumber}</p>
                    <p>Is Pharmacist: ${friend.isPharmacist}</p>
                    <h4>Friends:</h4>
                    <ul>
                        ${friendsArray.slice(1).map(subFriend => `
                            <li>
                                <p>Name: ${subFriend.name}</p>
                                <p>Favorite Number: ${subFriend.favoriteNumber}</p>
                                <p>Is Pharmacist: ${subFriend.isPharmacist}</p>
                            </li>
                        `).join('')}
                </li>
            `).join('')}
        </ul>
    `;

    htmlContent += userInfo;
}

// Insert the html content into the content div
contentDiv.innerHTML = htmlContent;
