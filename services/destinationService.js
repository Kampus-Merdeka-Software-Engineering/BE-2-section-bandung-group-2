const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Create New Destination
  createDestination: async (req, res, next) => {
      try {
          let { name_destination, loc_destination, desc_destination, open_hours, close_hours } = req.body;

          let newDestination = await prisma.Destination.create({
              data: {
                name_destination,
                loc_destination,
                desc_destination,
                open_hours,
                close_hours
              },
          });

          res.status(201).json({
              status: true,
              message: "New Destination Created Successfully!",
              data: newDestination,
          });

      } catch (err) {
          next(err);
      }
  },

  // Get All Destination
  getAllDestination: async (req, res) => {
    try {
        const destination = await prisma.Destination.findMany();
        res.json(destination);
    } catch (err) {
        next(err);
    }
  }
}