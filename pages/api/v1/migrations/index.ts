export default async function migrations(req, res) {
  const allowedMethods = ["GET", "POST"];
  if (allowedMethods.includes(req.method)) {
    // GET to see the migrations to be run
    // POST to run the migrations
  } else {
    return res.status(405).json({
      error: `Method "${req.method}" not allowed`,
    });
  }
}
