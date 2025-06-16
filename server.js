const sql = require("mssql/msnodesqlv8");

const config = {
  server: "NICOLAS\\SQLEXPRESS", // ← ton vrai nom de serveur
  database: "VDLPHOTOGRAPHIE", // ← adapte si le nom est différent
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

async function runQuery() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM Contacts"); // ← ou une autre table
    console.log(result.recordset);
  } catch (err) {
    console.error("Erreur SQL :", err);
  } finally {
    sql.close();
  }
}

runQuery();
