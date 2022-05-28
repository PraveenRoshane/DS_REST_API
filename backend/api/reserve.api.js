import {
  createReserveInDb,
  getReserveFromDb,
  getAllReservesFromDb,
  updateReserveFromDb,
  deleteReserveFromDb, getUserReserveFromDb,
} from "../db_services/reserve.service.js";

import nodemailer from 'nodemailer';

export const save = async ({
  UserId, hotelId, hotelName,
  CheckIn,
  CheckOut,
  Adults,
  Children,
  RoomType,
  Rooms,
  Email,
  Phone,

}) => {
  const ctx = {
    UserId,
    hotelId,
    hotelName,
    CheckIn,
    CheckOut,
    Adults,
    Children,
    RoomType,
    Rooms,
    Email,
    Phone,
  };

  const email = ctx.Email;

  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testemails9907@gmail.com",
      pass: "Testemail@9907",
    },
  });

  const message = {
    from: "testemails9907@gmail.com", // Sender address
    to: email, // List of recipients
    subject: "Confirmation Email", // Subject line
    text: "You Have Successfully reserved" + "\n\n"
    + "Check-in Date = " + ctx.CheckIn + "\n"
    + "Check-out Date = " + ctx.CheckOut + "\n"
    + "Adults = " + ctx.Adults + "\n"
    + "Children = " + ctx.Children + "\n"
    + "Room-Type = " + ctx.RoomType + "\n"
    + "Rooms = " + ctx.Rooms
  };

  console.log(message)

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  const reserve = await createReserveInDb(ctx);
  return reserve;
};

export const getById = async (id) => {
  const reserve = await getReserveFromDb(id);
  if (!reserve) {
    throw new Error(`Not found data`);
  }
  return reserve;
};

export const getByUser = async (id) => {
  const reserve = await getUserReserveFromDb(id);
  if (!reserve) {
    throw new Error(`Not found data`);
  }
  return reserve;
};

export const getAll = async () => {
  const reserves = await getAllReservesFromDb();
  return reserves;
};

export const update = async (
  id,
  { UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms, Email, Phone }
) => {
  const ctx = {
    UserId,
    CheckIn,
    CheckOut,
    Adults,
    Children,
    RoomType,
    Rooms,
    Email,
    Phone,
  };

  const reserve = await updateReserveFromDb(id, ctx);
  if (!reserve) {
    throw new Error(`Not found data`);
  }
  return reserve;
};

export const deleteReserve = async (id) => {
  const reserve = await deleteReserveFromDb(id);
  if (!reserve) {
    throw new Error(`Not found data`);
  }
};
