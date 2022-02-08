export const Users = {
    name: 'Users',
    primaryKey: '_id',
    properties: {
      _id: "objectId",
      _partition: "string",     
        firstName: 'string',
        mobileNumber: 'int', 
        password:'string?',
        creationDate:'date?'
      }
  };

  export const ItemIn = {
    name: 'ItemIn',
    primaryKey: '_id',
    properties: {
      _id: "objectId",
      _partition: "string",     
        Item: 'string',
        mobileNumber: 'int', 
        password:'string?',
        creationDate:'date?'
      }
  };