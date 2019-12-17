exports.run = (client, message, args) => {
    message.channel.send('This is the download link: https://github.com/tera-toolbox/tera-toolbox/releases/download/teratoolbox-setup/TeraToolbox.exe').catch(console.error);
}