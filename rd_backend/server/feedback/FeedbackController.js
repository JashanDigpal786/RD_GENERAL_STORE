const Feedback = require("./FeedbackModel")

add = (req, res) => {
    var validationerror = []
    if (!req.body.name)
        validationerror.push("name is required")
    if (!req.body.email)
        validationerror.push("email is required")
    if (!req.body.review)
        validationerror.push("review is required")
    if (!req.body.suggestion)
        validationerror.push("suggestion is required")
    if (validationerror.length > 0) {
        res.send({
            status: 420,
            success: false,
            message: "validation error occur",
            error: validationerror

        })
    }
    else {
        Feedback.findOne({ email: req.body.email })
            .then(feedbackData => {
                if (!feedbackData) {
                    let feedbackObj = new Feedback()
                    feedbackObj.name = req.body.name
                    feedbackObj.email = req.body.email
                    feedbackObj.review = req.body.review
                    feedbackObj.suggestion = req.body.suggestion
                    feedbackObj.save()
                        .then((feedbackData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "feedback added successffully",
                                data: feedbackData
                            })
                        })
                        .catch(err => {
                            res.send({
                                status: 500,
                                success: false,
                                message: "Internal server error",
                                error: err.message
                            })
                        })

                }
                else {
                    res.send({
                        status: 420,
                        sucess: false,
                        message: "Record is already exist"
                    })
                }
            })
            .catch(err => {
                res.send({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })

            })
    }
}
const getall = (req, res) => {
    Feedback.find()
        .then(feedbackData => {
            res.send({
                status: 200,
                success: true,
                message: "Data found",
                data: feedbackData
            })
        })
        .catch(err => {
            res.send({
                status: 500,
                success: false,
                message: "Internal server error",
                error: err.message
            })
        })
}


deletefeedback = (req, res) => {
    var validationerror = []
    if (!req.body._id)
        validationerror.push("_id is required")
    if (validationerror.length > 0) {
        res.send({
            status: 420,
            success: false,
            message: "Validation error occur",
            error: validationerror
        })
    }
    else {
        Feedback.deleteOne({ _id: req.body._id })
            .then(feedbackData => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Deleted Successfully",
                    data: feedbackData
                })
            })
            .catch(err => {
                res.send({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            })
    }

}

module.exports = {
    add, getall, deletefeedback
}