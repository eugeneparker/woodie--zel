const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
  
  if (msg.content === "-kabulet") {
	  msg.author.send("Kuralları okumuş olduğunu kabul ettin ve artık `@Başlangıç Seviyesi` rolüne sahipsin!")
	  let role = msg.guild.roles.find("name", "Başlangıç Seviyesi");
	  msg.member.addRole(role.id);
	  
  }
});

client.login(process.env.BOT_TOKEN);
