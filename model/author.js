var authors = [
    { id: 1, first_name: 'Steven', family_name: 'Rogers'}
  , { id: 2, first_name: 'Bruce', family_name: 'Banner'}
];

// Get All
exports.getAll = function(id,callback) {

    return callback(null, records);
};
    

// Research function by id
exports.findById = function(id,callback) {
    find = false;
    records.forEach(function(record) {
        if (record.id == id) {
            find = true;
            return callback(null, record);
        }
    });
    if (!(find)){
        return callback(new Error('User ' + id + ' does not exist'))}
 };

// Research function by Username
exports.findByName = function(name, callback) {
    var find = false;
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.name === name) {
          find=true;
          return callback(null, record);
      }
    }

    if (!(find)) {
        return callback(null, null);
    }
};
