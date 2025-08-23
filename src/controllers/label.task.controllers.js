import { Label } from "../models/label.model.js";
import { LabelTask } from "../models/label.task.model.js";
import { Task } from "../models/task.model.js";

//create LabelTask
export const createLabelTask = async (req, res) => {
  try {
    const labeltaskExist = await LabelTask.findAll({
      where: { id: req.params.id },
    });
    if (labeltaskExist) {
      return res
        .status(400)
        .json({ Message: "Ya existe un labeltask con esta ID" });
    }
    const labeltask = await LabelTask.create(req.body);

    return res.status(200).json(labeltask);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del CREATE" });
  }
};
//

//Obtener LabelTask
export const getLabelTask = async (req, res) => {
  try {
    const labeltask = await LabelTask.findAll({
      attributes: {
        exclude: ["label_id", "task_id"],
      },
      include: [{ model: Task }, { model: Label }],
    });
    if (!getLabelTask) {
      return res.status(404).json({ Message: "No se encontró las LABELTASK" });
    }
    return res.status(200).json(labeltask);
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Se ha ingresado al Catch del GET", error });
  }
};

export const getLabelTaskByPK = async (req, res) => {
  try {
    const labeltask = await LabelTask.findByPk(req.params.id);

    if (!labeltask) {
      return res
        .status(404)
        .json({ Message: "No se encontró la LABELTASK con esa ID" });
    }

    return res.status(200).json(labeltask);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
    console.log("Se ha Ingresado al cath", error);
  }
};