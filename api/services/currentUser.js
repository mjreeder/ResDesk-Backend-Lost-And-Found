var currentAuthorizedUser = '';
module.exports = {

    getCurrentAuthorizedUser: function(){
      return currentAuthorizedUser;
    },

    setCurrentAuthorizedUser: function(user){
      currentAuthorizedUser = user;
    }

}
