const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = '.';
let interval;
let autoSendEnabled = false;

client.once('ready', () => {
    console.log('Bot đang hoạt động');
    console.log('- Chúc các bạn một ngày vui vẻ -');
    
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; 

    if (message.content.toLowerCase() === `${prefix}send`) {
        if (autoSendEnabled) return; 

        // Bật chế độ tự động gửi tin nhắn
        autoSendEnabled = true;

        interval = setInterval(() => {
            message.channel.send('Xin chào ae').then((sentMessage) => {
                setTimeout(() => {
                    sentMessage.delete().catch(console.error);
                }, 3000);
            });
        }, 10000);

        setTimeout(() => {
            message.delete().catch(console.error);
        }, 1000);
    }

    if (message.content.toLowerCase() === `${prefix}stop`) {
        if (!autoSendEnabled) return; // Chưa bật chế độ tự động gửi tin nhắn

        autoSendEnabled = false;
        clearInterval(interval);

        setTimeout(() => {
            message.delete().catch(console.error);
        }, 1000);
    }
});
// Thay thế 'YOUR_TOKEN' bằng token của bot Discord của anh
client.login('MTExNzI5MjMxMzExOTU2NzkxNw.Gb_A7l.7qYo5xBQ3UfJvmFbu0GFjFFoCL_m5-eo6mFCvs');
console.log(`
███████╗ █████╗ ██╗  ██╗███████╗██████╗ 
╚══███╔╝██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
  ███╔╝ ███████║█████╔╝ █████╗  ██████╔╝
 ███╔╝  ██╔══██║██╔═██╗ ██╔══╝  ██╔══██╗
███████╗██║  ██║██║  ██╗███████╗██║  ██║
`);
