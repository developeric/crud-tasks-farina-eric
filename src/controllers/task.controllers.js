import { Profile } from "../models/profile.model.js";
import { Task } from "../models/task.model.js";
import { User } from "../models/user.model.js";

//CrearTask
export const taskCreate = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

  
    const titleExiste = await Task.findOne({ where: { title } });
    if (titleExiste) {
      return res
        .status(400)
        .json({ Message: "No pueden haber dos titulos iguales" });
    }

    // if (title === null || title === "" || title === undefined)
    //   return res.status(400).json({
    //     Message:
    //       "El TITULO no puede contener parametros Nulos,Vacíos o Indefinidos",
    //   });

      //isComplete
    // if (typeof isComplete !== "boolean") {
    //   return res
    //     .status(400)
    //     .json({ Message: "El valor tiene que ser Boolean" });
    // }

    const task = await Task.create(req.body);
    if (task) {
      return res
        .status(200)
        .json({ Message: "Se pudo crear el personaje", task });
    }
  } catch (error) {
    Message: "Se ha ingresado al CATCH";
    console.log(error);
  }
};
//

//ObtenerUser

export const getTask = async (req, res) => {
  try {
    const task = await Task.findAll({
      include:[{
        model: Profile
      }]
    });

        if (task) {
      return res
        .status(200)
        .json({ Message: "Se obtuvieron todos las TASK", task });
    }


    if (!task) {
      return res.status(404).json({ Message: "No se pudo encontrar al TASK" });
    }

  } catch (error) {
    Message: "Error al OBTENER la TASK por parte del servidor";
  }
};
//

//ObtenerUserbyPK
export const getTaskbyPK = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    const task = await Task.findByPk(req.params.id, {
      attributes: {
        exclude: ["user_id"],
      },

      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });
    if (!task) {
      return res
        .status(404)
        .json({ Message: "No se pudo encontrar al TASK por esa ID" });
    }
    if (task) {
      return res.status(200).json({ Message: "Se encontró la TASK", task });
    }
  } catch (error) {
    Message: "Error al Obtener la TASK por parte del servidor";
  }
};
//

//ActualizarTask
export const taskUpdate = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    if (title === null || title === "" || title === undefined) {
      return res.status(400).json({
        Message:
          "El Titulo no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    if (
      description === null ||
      description === "" ||
      description === undefined
    ) {
      return res.status(400).json({
        Message:
          "El Titulo no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const descriptionLargo = (description) => {
      if (description.length > 100) {
        description = descriptionLargo;
        console.log("El TITULO es muy largo");
        return res.status(400).json({
          message: "EL TITULO no puede contener mas de 100 caracteres",
        });
      }
    };

    const task = await Task.update(
      { title, description, isComplete },
      { where: { id: req.params.id } }
    );

    if (task) {
      return res.status(201).json({ Message: "Se actualizó la TASK", task });
    }

    return res.status(400).json({ Message: " No se pudo ACTUALIZAR la TASK" });
  } catch (error) {
    Message: "Error por parte del servidor al Actualizar las TASK";
  }
};
//

//eliminarUser
export const taskDelete = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    const task = await Task.destroy({ where: { id: req.params.id } });
    if (user) {
      return res.status(200).json({ Message: "Se ELIMINÓ con exito la Task" });
    }

    return res.status(400).json({ Message: "No se pudo ELIMINAR la Task" });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error por parte del servidor al ELIMINAR la TASK" });
  }
};
//
