import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";

//crear Profile
export const createProfile = async (req, res) => {
  try {
    const { real_name, description, age } = req.body;

    // if (real_name === null || real_name === "" || real_name === undefined)
    //   return res.status(400).json({
    //     Message:
    //       "El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos",
    //   });
    const newProfile = await Profile.create(req.body);
    const profileReturn = await Profile.findByPk(newProfile.id, {
      include: [
        {
          model: User,
          as: "usuario",
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    return res.status(201).json(profileReturn);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del CREATE" });
    console.log("Se ha Ingresado al cath", error);
  }
};
//

//Obtener Profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findAll({
      attributes: {
        exclude: ["user_id"],
      },
      include: [
        {
          model: User,
          as: "usuario",
          attributes: {
            exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
          },
        },
      ],
    });

    if (profile) {
      return res
        .status(200)
        .json({ Message: "Se obtuvieron los Perfiles", profile });
    }

    if (!profile) {
      return res
        .status(404)
        .json({ Message: "No se pudo encontrar al PROFILE" });
    }
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
    console.log(error);
  }
};
//

//Obtener Profile by PK
export const getProfileByPK = async (req, res) => {
  try {
    const profile = await Profile.findByPk();

    if (!profile) {
      return res
        .status(404)
        .json({ Message: "No se encontró el Personaje con esa ID" });
    }

    return res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
    console.log("Se ha Ingresado al cath", error);
  }
};



//ActualizarProfile
export const updateProfile = async (req, res) => {
  const profile = Profile.update(req.body, { where: { id: req.params.id } });

  if (profile) {
    return res.status(201).json({ Message: "Se actualizó el PROFILE" });
  }
};





//eliminarProfile
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.destroy({ where: { id: req.params.id } });
    if (profile) {
      return res
        .status(200)
        .json({ Message: "Se ELIMINÓ con exito el PROFILE" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error por parte del servidor al ELIMINAR el PROFILE" });
  }
};
//
