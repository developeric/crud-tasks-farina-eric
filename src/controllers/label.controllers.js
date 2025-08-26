import { Label } from "../models/label.model.js";

//create Label
export const createLabel = async (req, res) => {
  try {
    const { name } = req.body;


      //  if (name === null || name === "" || name === undefined)
      // return res.status(400).json({
      //   Message:
      //     "El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos",
      // });

    // const labelExist = await Label.findAll({where: { name: req.params.name}});
    // if (labelExist) {
    //   return res
    //     .status(400)
    //     .json({ Message: "Ya existe un LABEL con esta ID" });
    // }

 
    const label = await Label.create(req.body);
    return res.status(200).json({ Message: "Se ha creado la Label", label });

  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del CREATE" });
    console.log(error);
  }
};
//

//Obtener Label
export const getLabel = async (req, res) => {
  try {
    const label = await Label.findAll();

    return res.status(200).json(label);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
    console.log("Se ha Ingresado al cath", error);
  }
};
//

//Obtener Label by ID
export const getLabelByPK = async (req, res) => {
  try {
    const label = await Label.findByPk(req.params.id);

    if (!label) {
      return res
        .status(404)
        .json({ Message: "No se encontró la LABEL con esa ID" });
    }

    return res.status(200).json(label);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
    console.log("Se ha Ingresado al cath", error);
  }
};




//update Label
export const updateLabel = async (req, res) => {
  const label = Label.update(req.body, { where: { id: req.params.id } });

  if (label) {
    return res.status(201).json({ Message: "Se actualizó la LABEL" });
  }
};




//delete Label
export const deleteLabel = async (req, res) => {
  try {
    const label = await Label.destroy({ where: { id: req.params.id } });
    if (label)
      return res
        .status(200)
        .json({ Message: "Se ELIMINÖ la label"});
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error por parte del CATCH al Actualizar" });
  }
};
