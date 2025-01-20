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
let htmlContent = "<h1>Users</h1><ul>";

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const name = user.getElementsByTagName('name')[0].textContent;
    const favoriteNumber = user.getElementsByTagName('favoriteNumber')[0].textContent;
    const isPharmacist = user.getElementsByTagName('isPharmacist')[0].textContent;
    const friends = user.getElementsByTagName('friend');

    console.log(user.getElementsByTagName('name')[0].textContent
    );
    
    
    let friendsNames = [];
    if (name === 'John') {
        for (let j = 0; j < friends.length; j++) {
            const friendName = friends[j].getElementsByTagName('name')[0].textContent;
            friendsNames.push(friendName);

            // Get friends of John's friend
            const friendsOfFriend = friends[j].getElementsByTagName('friend');
            let friendsOfFriendNames = [];
            for (let k = 0; k < friendsOfFriend.length; k++) {
                friendsOfFriendNames.push(friendsOfFriend[k].getElementsByTagName('name')[0].textContent);
            }
            if (friendsOfFriendNames.length > 0) {
                friendsNames.push(`(${friendsOfFriendNames.join(', ')})`);
            }
        }
    }
    const friendsList = friendsNames.join(', ');




    htmlContent += `<li><strong>Name:</strong> ${name}, <strong>Favorite Number:</strong> ${favoriteNumber}, <strong>Is Pharmacist:</strong> ${isPharmacist}</li>`;
    
    htmlContent += `<li><strong>Friends:</strong> ${friendsList}</li>`;
    




}

htmlContent += "</ul>";

// Insert the html content into the content div
contentDiv.innerHTML = htmlContent;
