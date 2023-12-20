const db = require("../db");

// All Notification

exports.allNotification = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "notification"`);
    res.status(200).json({
      success: true,
      message: "All Notification",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/**Create notification */

exports.createNotification = async (req, res) => {
  try {
    const result = await db.query(`
      INSERT INTO notification (id, notification)
      VALUES ('${req.body.id}', '${req.body.notification}');
    `);
    res.status(200).json({
      success: true,
      message: "The new notification is created",
    });
  } catch (error) {
    console.error(error);
  }
};

// delete notification

exports.deleteNotification = async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM "notification" WHERE id = ${req.params.id}`
    );

    res.status(200).json({
      success: true,
      message: "The user is deleted",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};
