exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            title: "Read the FAQ it answers most common questions including problems!",
            description: "<#497353982541430787>"
        }
    }).catch(console.error);
}