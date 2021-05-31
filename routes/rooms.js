import express from "express";
//express routeri kullanacağımız için import ettik
import {
  getRooms,
  createRoom, 
  updateReservation
} from "../controllers/rooms.js";

//http://localhost:5000/rooms urlesine gelen bütün istekler burada yapılıyor 
//router oluşturduk ve exspressten routeri çağırdık
const router = express.Router();

//GET POST UPDATE metodlarımız var
//routerlarımızı yönlendirme işlemlerimizi tanımlıyoruz
//router.get("/rooms", getRooms);  http://localhost:5000/rooms bu aktif hale gelir 
//getRoom controllerini çaağırıyor metoddur yönlendirdiğimizde ne yapacağımızı controller dosyasnda belirteceğiz
//getRoom gidiip benim veritabanından bütün verilerimi alıp getiren bir metoddur 
router.get("/rooms", getRooms);
router.post("/rooms",createRoom);
router.put("/rooms/:id",updateReservation);


//ulaşabilmek için export ettik
export default router;
