import Beritas from "./beritas-models.js";
import Users from "./users-models.js";
import Comments from "./comments-models.js";

Users.hasMany(Comments);
Beritas.hasMany(Comments);

Comments.belongsTo(Users);
Comments.belongsTo(Beritas);