exports.handler = async (event, context) => {
    const guides = [
        {title: 'Beat all Zelda Bosses like a Boss',author: 'mario'},
        {title: 'Mario kart Shortcuts You never know Existed',author: 'luigi'},
        {title: 'Ultimate Street guider Fighter',author: 'chun-li'}
    ]

   if(context.clientContext.user){
    return {
        statusCode: 200,
        body: JSON.stringify(guides)
    }
   }
   return {
    statusCode: 401,
    body: JSON.stringify({msg: "You must be logged in first!!!"})
}
    
}