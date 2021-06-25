exports.handler = async () => {
    console.log('function is running');

    const data = {name: 'umair',age: '24',job: 'programmer'}

    // return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}