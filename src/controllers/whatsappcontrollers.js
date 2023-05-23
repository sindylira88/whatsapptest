const VerifyToken = (req, res) => {
    res.send("hello VerifyToken");
}

const ReceivedMess = (req, res) => {
    res.send("hello received");
}

module.exports = {
    VerifyToken,
    ReceivedMess,
}