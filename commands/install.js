exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            title: "Read info regarding installing TERA Toolbox",
            description: "https://ptb.discordapp.com/channels/497352203019747353/497353919228542977/575770230391963648",
        }
    }).catch(console.error);
}