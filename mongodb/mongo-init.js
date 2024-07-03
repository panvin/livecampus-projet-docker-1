db.createUser(
    {
        user: "mongoUser",
        pwd: "monSuperPassword",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);
db.compteur.insertOne({count: 1})