exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
    alterContext: function(funct, obj) {
        return funct.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
      var val = [];
      for(var property in obj){
        if(obj.hasOwnProperty(property)){
        val.push(property + ': ' + obj[property]);
        }
      }
    return val;
  }
};
