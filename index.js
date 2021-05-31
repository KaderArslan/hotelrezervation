import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";

import roomRoutes from "./routes/rooms.js";
import usersRoutes from "./routes/users.js";
//import adminRoutes from "./routes/admin.js";

//express server yaratıyoruz uygulamayı oluşturduğumuz yer
const app = express();
//.env dosyasının içeriklerini process.env içerisine yükler
dotenv.config();

//json formatında gelen bir veriyi kabul et
app.use(bodyParser.json( {limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit:"30mb", extended: true}));
//uzaktaki bir sunucuya gönderilecek http requestlerde sorun yaşanmaması için cors paketini aktif hale getiriyoruz
app.use(cors());

//ilk server dosyama geldiği zaman buraya yapılan herhangi bir http isteğinde cevap verdik send ile
//res.send("Hello Kader");
// res.json({
//     author:'Kader Arslan',
//     message:'Hello Kader'
//   })
app.get("/", (req, res) => {
    res.json({
            author:'Kader Arslan',
            message:'Hello Kader'
          })
    
})

//Swagger Integration
//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//uygulamanın routelarını tanımlamadan önce işe yarayabilmesi için room endpointine geldiği zaman burdaki room endpointiyle ilgilenen routelarımı roomRoute şeklinde tanımlıyoruz ve import ettik
//room kısmına gelen her istekte roomRoutes ilgileniyor demek
app.use("/rooms", roomRoutes);
//rooms geldiği zaman benim routes rooms dosyama yönlendirilecek
app.use("/users",usersRoutes);
//app.use("/admin", adminRoutes);

//backendin çalışacağı bir port olması gerek
const PORT = process.env.PORT || 5002;

//mongoose kullanarak mongodb ye bağlanabiliriz clustera
//.env'ye kaydettik
//connection urlini verdik .env'ye kaydettik

//process.env'ye Connection_url objesinin içerisine yüklenmesi için dotenv paketini yükledik
//connection url kullanarak mongodb bağlantısı gerçekleştireceğiz
mongoose.connect(process.env.CONNECTION_URL, {
    //uyarı vermemesi için true verdik
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch(error => {
    console.error(error.message);
})
//başarılı bir şekilde bağlanırsam then kısmı döner ve o portta çalışsın deriz
//hata varsa catch döner
