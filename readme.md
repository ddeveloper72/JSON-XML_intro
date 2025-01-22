# Introduction to JSON & XML in advance of firly FHIR Training

## Objective

This material is intend for use as a light touch over view of what a JSON object is and what an XML document is.

Both data types are used by API services around the world for the purpose of exchanging information between different systems.

Each subject is broken into 3 bite-size sections, looking at the same information in JSON and XML format.

An example of the data is then shown in a web browser, to demonstrate the two different data storage routes, producing the same outcome for the end-user.

## Learning Outcomes

- **Recognize JSON Objects**
  - Understand the structure and components of a JSON object.

- **Recognize XML Documents**
  - Identify the elements and attributes of an XML document.
  
- **Understand APIs**
  - Learn how Rest APIs serve information in structured formats like JSON or XML.
  - Understand how Rest APIs facilitate data transfer and presentation in a human-readable way.

- **Interact with an API**
  - Learn to retrieve specific information from JSON or XML data served by an API.
  - Understand how to create, read, update, or delete information within a JSON document using an API.

- **Use POSTMAN**
  - Explore how Postman connects to APIs and retrieves information through interaction.

- **Edit a JSON ore an XML document**
  - Learn to edit JSON or XML documents using a coding text editor like VS Code.

## Resources

- [Copy of firely FHIR Course Intro](https://app.mural.co/t/firely9202/m/firely9202/1714390227687/f7fda9422d30669a2dd251b53e68586f2281fec9)
- [Learn XML in 10 minutes](https://www.youtube.com/watch?v=1JblVElt5K0)
- [Learn JSON in 10 minutes](https://www.youtube.com/watch?v=iiADhChRriM)
- [Download POSTMAN for working with API services](https://www.postman.com/downloads/)
- [Download VS Code for writing and editing code](https://code.visualstudio.com/download)

### Postman API Resources

- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
  - New Request - Get all users
    - GET URL: https://jsonplaceholder.typicode.com/users
  - New Request - Search user id
    - GET URL: https://jsonplaceholder.typicode.com/users?_id=1
  - New Request - Search username
    - GET URL: https://jsonplaceholder.typicode.com/users?username=Bret

- [HAPI FHIR Server](http://hapi.fhir.org/)
  - New Request - Search by Patient Name
    - GET URL: http://hapi.fhir.org/baseR4/Patient?name=Bob
  - New Request - Search by Patient Name Last Updated
    - GET URL: http://hapi.fhir.org/baseR4/Patient?name=Bob&_lastUpdated=2025-01-21
  - New Request - Search by Patient Id
    - GET URL: http://hapi.fhir.org/baseR4/Patient?_id=743781861663c014ae2e128215fe4ed7

There are many extensions available for VS Code that assist with working with working with JSON, XML as well as many other data types as well as programming languages.
