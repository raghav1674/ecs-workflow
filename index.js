const express = require("express");
const AWS = require("aws-sdk");
const app = express();

AWS.config.update({ region: 'ap-south-1' })

const dynamoClient = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

app.get('/:path', (req, res) => {

    const params = {
        TableName: 'request_info',
        Item: {
            'requestPath': { S: req.params.path },
            'requestHostName': { S: req.hostname }
        }
    };
    
    dynamoClient.putItem(params, function (err, data) {


        if (err) {
            res.status(500).json({ 'message': 'error occurred' })
        } else {
            res.status(200).json({ 'message': 'Inserted' })
        }
    });

})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})



