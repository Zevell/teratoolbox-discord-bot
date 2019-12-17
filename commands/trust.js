exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            title: "Read info regarding trust/virus concerns",
            description: "https://ptb.discordapp.com/channels/497352203019747353/497353919228542977/575770241762721813"
        }
    }).catch(console.error);
}