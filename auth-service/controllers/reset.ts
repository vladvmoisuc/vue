export default async (_req, res, next) => {
  try {
    res.send(`We're not going to change your password right now.`);
  } catch (error) {
    next(error);
  }
};
