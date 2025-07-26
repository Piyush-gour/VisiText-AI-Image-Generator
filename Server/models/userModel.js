import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },                      // fixed "requrid" → "required"
  email: { type: String, required: true, unique: true },       // fixed "requrid" + added unique: true properly
  password: { type: String, required: true },                  // fixed "requrid" → "required"
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);  // fixed incorrect access

export default userModel;
