module.exports = {
  prefix: '!stats',
  description: 'Get current server information!',
  /**
   * @name stats
   * Randomly selects an option, and returns it to chat.
   *
   * @param tba
   */
  command: function stats(message) {
    try {
      const statsEmbed = {
        color: '#0099FF',
        title: 'Server Information',
        description: 'Here is some information on our server!',
        fields: [
          {
            name: 'Server Name',
            value: message.guild.name
          },
          {
            name: 'Created on',
            value: message.guild.createdAt
          },
          {
            name: 'You joined on',
            value: message.member.joinedAt
          },
          {
            name: 'Total Member Count is',
            value: message.guild.memberCount
          },
          {
            name: 'Server run by',
            value: message.guild.owner
          }
        ],
        footer: { text: 'Thanks for being here with us!' }
      };
      message.channel.send({ embed: statsEmbed });
    } catch (error) {
      console.error(error);
    }
  }
};
