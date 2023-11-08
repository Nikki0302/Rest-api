const controller = {
   get: (req, res) => {
      return res
      .status(200)
      .json({message: "This get request from user"});
   },
};

export default controller;

