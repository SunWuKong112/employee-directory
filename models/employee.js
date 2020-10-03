const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "Enter a first name"
    },
    lastName: {
     type: String,
     trim: true,
     required: "Enter a last name"
   },
    value: {
      type: Number,
      required: "Enter a employee verification number"
    },
    position: {
         type: String,
         trim: true,
         required: "Enter a position"
    },
    department:{
         type: String,
         trim: true,
         required: "Enter a department"
    },
    dateEntered: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;