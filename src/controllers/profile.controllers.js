import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";
//crear Profile
export const createProfile = async (req, res) => {
  try {
    const { real_real_name, age, user_id } = req.body;
    const userExist = await User.findByPk(user_id);

    //
    const profileExist = await Profile.findAll({
      where: { id: req.params.id },
    });
    if (profileExist) {
      return res
        .status(400)
        .json({ Message: "Ya existe un usuario con esta ID" });
    }
    //

        if (real_name === null || real_name === "" || real_name === undefined)
      return res.status(400).json({
        Message:
          "El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos",
      });

    const profile = await Profile.create(req.body);
    return res.status(200).json(profile);
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
    });
    if (!profile) {
      return res
        .status(404)
        .json({ Message: "No se pudo encontrar al PROFILE" });
    }
    return res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ Message: "Se ha ingresado al Catch del GET" });
  }
};
//

//Obtener Profile by PK
export const getProfileByPK = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id, {
      attributes: {
        exclude: ["user_id"],
      },
    });

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
