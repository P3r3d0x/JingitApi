export const allAccess = async(req, res) => {
    res.status(200).send("Public Content.");
  };
  
export const userBoard = async(req, res) => {
res.status(200).send("User Content.");
};

export const adminBoard = async(req, res) => {
res.status(200).send("Admin Content.");
};

export const moderatorBoard = async(req, res) => {
res.status(200).send("Moderator Content.");
};