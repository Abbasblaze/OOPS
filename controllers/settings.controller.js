const db = require("../db");

// Settings APIs

/**Create Notification */

exports.createSettings = async (req, res) => {
  try {
    const result = await db.query(`
      INSERT INTO users (id , chats , help , account)
      VALUES ('${req.body.id}', '${req.body.chats}', '${req.body.help}' , '${req.body.account}');
    `);
    res.status(200).json({
      success: true,
      message: "The new settings are created",
    });
  } catch (error) {
    console.error(error);
  }
};

//All chat

exports.chatAll = async (req, res) => {
  try {
    const result = await db.query(`SELECT chatAll FROM "settings"`);
    res.status(200).json({
      success: true,
      message: "Your all chats are provided below",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

// help

exports.helpReq = async (req, res) => {
  try {
    const result = await db.query(`SELECT help FROM "settings"`);
    res.status(200).json({
      success: true,
      message: "You can contect us form the detales givne below",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

// Account

exports.accountInfo = async (req, res) => {
  try {
    const result = await db.query(`SELETC account FROM "settings"`);
    res.status(200).json({
      success: true,
      message: "The accounts detales are given below ",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};
