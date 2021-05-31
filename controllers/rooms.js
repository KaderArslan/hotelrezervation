import Room from "../models/rooms.js";

//veritabanımıza çağrı isteklerimizde bulunacağız
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    //veritabanında ne kadar oda varsa onları bul getir
    res.status(200).json(rooms);
    //json formatında restapi olacak frontendimle haberleşiyor olacağım json formatında postlarımızı döndereceğiz
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createRoom = async (req, res) => {
  const room = req.body;
  const newRoom = new Room(room);
  try {
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateReservation = async (req, res) => {
  const { id: _id } = req.params;
  const room = req.body;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(_id,room,{ new: true });
    res.status(200).json(updatedRoom);
  } catch (error) {
      res.status(409).json({message: error.message,});
    }
};

export const deleteRoom = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedRoom = await Room.findByIdAndRemove(_id);
    res.json(deletedRoom);
  } 
  catch (error) {
    res.status(409).json({
    message: error.message,
    });
  }
};







