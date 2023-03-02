/* eslint-disable camelcase */
const { tbl_DentalSpecialties } = require('../models/index')
module.exports = class DentSpeCtrl {
  // CRUD: (C) Create a new Dental Specialtie record in the database. Data passed in body request
  static async apiAddDentSpec (req, res) {
    try {
      const newDentSpecData = {
        name: req.body.name,
        description: req.body.description
      }
      const response = await tbl_DentalSpecialties.create(newDentSpecData)
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (U) Update a DentalSpecialties record in the database. Data passed in body request
  static async apiUpdateDentSpec (req, res) {
    try {
      const response = await tbl_DentalSpecialties.update({
        name: req.body.name,
        description: req.body.description
      }, { where: { id: req.params.id } })
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (R) Retrive DentalSpecialties data from database. The user ID received in request parameter
  static async apiGetDentSpecById (req, res) {
    try {
      const response = await tbl_DentalSpecialties.findByPk(req.params.id)
      if (!response) {
        return res.status(404).json('¡No existe esa especialidad en la base de datos!')
      } else {
        return res.json(response)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (D) Delete from database the DentalSpecialties record. The DentalSpecialties ID received in request parameter
  static async apiDeleteDentSpec (req, res) {
    try {
      const response = await tbl_DentalSpecialties.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json('¡No existe esa especialidad en la base de datos!')
      } else {
        return res.json(response)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // Testing Method
  static async apiGetAllDentSpec (req, res) {
    try {
      const dentSpecList = await tbl_DentalSpecialties.findAll()
      if (!dentSpecList) {
        return res.status(404).json('¡No existe esa especialidad en la base de datos!')
      } else {
        return res.json(dentSpecList)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
