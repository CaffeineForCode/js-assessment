exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var deferr = $.Deferred();
    setTimeout(function () {
      deferr.resolve(value);

    },10);
    return deferr.promise();

  },

  manipulateRemoteData: function(url) {
    var deffer = $.Deferred();
    $.ajax(url).then(function(resp){
      var people = $.map(resp.people, function (person) {
        return person.name;

      });
      deffer.resolve(people.sort());
    });
    return deffer.promise();
  }
};
