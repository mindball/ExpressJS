db.rentings.update({}, {$set: {"rentedOn": Date.now()}}, {multi:true})