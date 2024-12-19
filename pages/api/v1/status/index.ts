export default async function status(req, res) {
  res.status(200).json({
    updated_at: new Date().toISOString(),
  });
}
