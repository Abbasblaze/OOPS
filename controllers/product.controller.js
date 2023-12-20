const db = require("../db");

/**create product  */

/** JOINS */

exports.productName = async (req, res) => {
  try {
    const result = await db.query(`
          SELECT customer.customername
          FROM customer
          INNER JOIN product ON product.productname = customer.customername;
        `);

    res.status(200).json({
      success: true,
      message: "the table is Inner joined now",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/** JOINS*/

exports.productOrder = async (req, res) => {
  try {
    const result = await db.query(`SELECT customerid
          FROM customer
          LEFT JOIN product ON product.productid=customer.customerid;`);

    res.status(200).json({
      success: true,
      message: "the table is LEFT JOIN joined now",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/**get product */

exports.getProduct = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "product"`);

    res.status(200).json({
      success: true,
      message: "The product table is given below",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

// create product

exports.createProduct = async (req, res) => {
  try {
    const result = await db.query(`
          INSERT INTO product (productname, productid, customerorder, id)
          VALUES ('${req.body.productname}', ${req.body.productid}, '${req.body.customerorder}', '${req.body.id}');
        `);

    res.status(200).json({
      success: true,
      message: "The new product is created",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/**update product */

exports.updateProduct = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM "product" 
           WHERE 
             productname = '${req.body.productname}' AND
             productid = '${req.body.productid}' AND
             customerorder = '${req.body.customerorder}' AND
             id = '${req.body.id}'
          `
    );

    res.status(200).json({
      success: true,
      message: "The Product is updated",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

/**delete product */

exports.deleteProduct = async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM product WHERE id = ${req.params.id}`
    );

    res.status(200).json({
      success: true,
      message: "The product is deleted",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};
