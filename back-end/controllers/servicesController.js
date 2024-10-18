const Service = require('../models/service');


exports.addService = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newService = new Service({
      title,
      description
    });

    await newService.save();

    return res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params; 
    console.log(id);

    const deletedService = await Service.findByIdAndDelete(id);
    console.log("done");

    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res.status(200).json({ message: "Service deleted successfully", service: deletedService });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find(); 
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
