const aiService = require('../services/ai.service')


module.exports.getResponse = async(req, res)=>{
    
    try {

        // fetch data
        const {code} = req.body;

        // validation
        if(!code) {
            res.status(404).json({
                status: false,
                message: "Prompt not provided",
                data: null,
            })
        }

        const response = await aiService(code);

        // res.status(200).json({
        //     status: true,
        //     message: "Response fetched successfully",
        //     data: response,
        // })
        
        res.send(response);
    } 
    catch (error) {
        console.log("Error Occured during get-response");
        console.warn(error.message);

        res.status(500).json({ 
            status: false,
            message: "An error occurred while fetching data",
            data: null,
        });
    }
}