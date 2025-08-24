import { User } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //name
    if (name === null || name === "" || name === undefined)
      return res.status(400).json({
        Message:
          "El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos",
      });

    const nameLargo = (name) => {
      if (name.length > 100) {
        name = nameLargo;
        console.log("El nombre es muy largo");
        return res.status(400).json({
          message: "EL nombre no puede contener mas de 100 caracteres",
        });
      }
    };

    const nameExiste = await User.findOne({ where: { name } });
    if (nameExiste) {
      return res.status(400).json({ Message: "Este NAME ya está en uso" });
    }
    //
    //email
    if (email === null || email === "" || email === undefined) {
      return res.status(400).json({
        Message:
          "El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const emailExiste = await User.findOne({ where: { email } });

    if (emailExiste) {
      return res.status(400).json({ Message: "Este correo ya está en uso" });
    }

    const emailLargo = (email) => {
      if (email.length > 100) {
        email = emailLargo;
        console.log("El email es muy largo");
        return res.status(400).json({
          message: "EL Email no puede contener mas de 100 caracteres",
        });
      }
    };
    //
    //password

    if (password === null || password === "" || password === undefined) {
      return res.status(400).json({
        Message:
          "El PASSWORD no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const passwordlLargo = (password) => {
      if (password.length > 100) {
        password = passwordlLargo;
        console.log("El password es muy largo");
        return res.status(400).json({
          message: "EL Password no puede contener mas de 100 caracteres",
        });
      }
    };

    //creandoUser
    const user = User.create(req.body);
    if (user) {
      return res.status(200).json({
        Message: "Se ha creado el Usuario",
        user: { name, email, password }   
      });
    }

    return res
      .status(400)
      .json({ Message: " No se pudo ACTUALIZAR el personaje" });
  } catch (error) {
    Message: "Error al crear el Personaje por parte del servidor";
  }
};

//ObtenerUser

export const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      return res.status(404).json({ Message: "No se pudo encontrar al User" });
    }
    return res
      .status(200)
      .json({ Message: "Se obtuvieron todos los Users", user });
  } catch (error) {
    Message: "Error al CREAR el User por parte del servidor";
  }
};
//

//ObtenerUserbyPK
export const getUserbyPK = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ Message: "No se pudo encontrar al User" });
    }

    if (user) {
      return res.status(200).json({ Message: "Se encontró el user", user });
    }
  } catch (error) {
    Message: "Error al ObtenerbyPK el USER por parte del servidor";
  }
};
//

//actualizar User
export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //name
    if (name === null || name === "" || name === undefined) {
      return res.status(400).json({
        Message:
          "El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const nameLargo = (name) => {
      if (name.length > 100) {
        name = nameLargo;
        console.log("El nombre es muy largo");
        return res.status(400).json({
          message: "EL nombre no puede contener mas de 100 caracteres",
        });
      }
    };
    //
    //email
    if (email === null || email === "" || email === undefined) {
      return res.status(400).json({
        Message:
          "El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const emailLargo = (email) => {
      if (email.length > 100) {
        email = emailLargo;
        return res.status(400).json({
          message: "EL Email no puede contener mas de 100 caracteres",
        });
      }
    };
    //
    //password
    if (password === null || password === "" || password === undefined) {
      return res.status(400).json({
        Message:
          "El PASSWORD no puede contener parametros Nulos,Vacíos o Indefinidos",
      });
    }

    const passwordlLargo = (password) => {
      if (password.length > 100) {
        password = passwordlLargo;
        console.log("El password es muy largo");
        return res.status(400).json({
          message: "EL Password no puede contener mas de 100 caracteres",
        });
      }
    };
    //

    const user = User.update(
      { name, email, password },
      { where: { id: req.params.id } }
    );

    if (user) {
      return res.status(201).json({ Message: "Se actualizó el Personaje" });
    }

    return res
      .status(400)
      .json({ Message: " No se pudo ACTUALIZAR el personaje" });
  } catch (error) {
    Message: "Error al crear el Personaje por parte del servidor";
  }
};
//

//eliminarUser
export const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    if (user){
      return res.status(200).json({ Message: "Se ELIMINÓ con exito el User" });}

  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error por parte del servidor al ELIMINAR el User" });
  }
};
//
