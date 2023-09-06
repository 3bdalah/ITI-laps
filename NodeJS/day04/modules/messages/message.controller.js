import messageModel from "../../db/models/message.model.js";

// title ... content  ...  reciveId ...

// create add message
const addMsg = async (req, res) => {
  let { id } = req.params;
  let { title, messageContent } = req.body;
  let addedMessage = await messageModel.insertMany({
    title,
    messageContent,
    recivedId: id,
  });

  let listMessage = await messageModel.find();
  res.status(200).json({ message: "Add New Message as Anonmus ", listMessage });
};

export { addMsg };
