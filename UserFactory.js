function BasicUser(email, rank) {
    this.email = email;
    this.rank = "user";
    this.password = this.rank+Math.round(Math.random()*1000)+"_1234";
}

function AdminUser(email) {
    BasicUser.call(this, email);
    this.rank = "admin";
}

let UserFactory = {

    getUser: function(rank) {
        let user;
        let email = rank+Math.round(Math.random()*1000)+"'exaple.com";

        switch(rank) {
            case "admin":
                user = new AdminUser(email);
            break;
            case "user":
            default:
                user = new BasicUser(email);
        }

        user.trainingRequired = true;
        user.info = function() {
            console.log(this.name, this.rank, this.email);
        }

        return user;
    }
};