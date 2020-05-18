const Discord = require('discord.js')

const developer = 'Jeremy#2029'

exports.run = async(client, message, args) => {

const about = new Discord.RichEmbed() 
.setColor('#7739C4')
.setTitle('Glitch Info')
.setURL('https://discord.gg/NCsRGN7')
.setDescription(`Hello! I am Glitch! My prefix is g!\n\n` +
'**What is Glitch?**\n\n' +
'Glitch is a fun moderation tool and a games tool!\n\n' +
'It is easy to use and always being updated. We take suggestions from the community so you can have a better experience.\n\n' +
'Glitch: [Click Here To Join!](https://discord.gg/NCsRGN7)'
)
.setTimestamp()
.setFooter(`Created By **Jeremy#2029**`, message.author.avatarURL)
message.channel.send(about)
}

exports.config = {
aliases: ['bmb']
}
