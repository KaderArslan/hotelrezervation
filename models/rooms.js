import mongoose from "mongoose";
// import moment from "moment";

//room objemizin neye benzediğini burada belirtiyoruz
const roomSchema = mongoose.Schema({
  roomno:String,
  isReserved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  form: [
    {
      startDate: {
        type: String,
        default: () => moment().format("MMMM Do YYYY"),
      },
      endDate: {
        type: String,
        default: () => moment().format("MMMM Do YYYY"),
      }
    },
  ],
});
//roomSchemanın yaratıldığı alana createdAt yeni roomrandevu eklediğimde bu alanı kendisi dolduracak

//export etmeden önce model oluşturuyoruz room isminde ve roomSchemayı parametre olarak veriyoruz

const Room = mongoose.model("Room", roomSchema);

export default Room;
//veritabanına kaydedeceğim her şey birer sileceğim şeyler getirip göstereceğim şeyler
// yani bir tane room modelimiz var ve bunları veritabanında kaydedeceğiz 
