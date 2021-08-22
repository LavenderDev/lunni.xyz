const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
module.exports = {
     name: 'serverinfo',
     description: 'See server information',
     category: 'Information',
     owner: false,
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const { id, name, memberCount, premiumSubscriptionCount, ownerId, description, createdAt, features, maximumMembers, premiumTier, createdTimestamp } = interaction.guild
          const icon = interaction.guild.iconURL(), banner = interaction.guild.bannerURL(), splash =  interaction.guild.splashURL()
          
          const boostTiers = {
               NONE: "None",
               TIER_1: "Tier 1",
               TIER_2: "Tier 2",
               TIER_3: "Tier 3",
          }
          const featuresItems = {
               ANIMATED_ICON: "Animated Icon",
               BANNER: "Banner",
               COMMERCE: "Commerce",
               COMMUNITY: "Community",
               DISCOVERABLE: "Discoverable",
               FEATUREABLE: "Featureable",
               INVITE_SPLASH: "Invite Splash",
               MEMBER_VERIFICATION_GATE_ENABLED: "Member Verification Gate",
               NEWS: "News",
               PARTNERED: "Partnered",
               PREVIEW_ENABLED: "Preview",
               VANITY_URL: "Vanity URL",
               VERIFIED: "Verified",
               VIP_REGIONS: "Vip Regions",
               WELCOME_SCREEN_ENABLED: "Welcome Screen",
               TICKETED_EVENTS_ENABLED: "Ticketed Events",
               MONETIZATION_ENABLED: "Monetization",
               MORE_STICKERS: "More Stickers",
               THREE_DAY_THREAD_ARCHIVE: "Three Day Thread Archive",
               SEVEN_DAY_THREAD_ARCHIVE: "Seven Day Thread Archive",
               PRIVATE_THREADS: "Private Threads",
          }
          let f = [];
          features.forEach((f) => {
               f.push(featuresItems[f])
          })
          const embed = new MessageEmbed()
               .setAuthor(name + "'s information", icon)
               .setThumbnail(banner)
               .setColor(client.color)
               .addFields(
                    { name: `Owner`, value: `<@${ownerId}> | \`${ownerId}\`` },
                    { name: `Extra`, value: `**ID:** \`${id}\`\n**MemberCount:** ${memberCount} / ${maximumMembers}\n**Created:** ${createdAt.toLocaleDateString()}\n**Boosts:** ${premiumSubscriptionCount}/30 (${boostTiers[premiumTier]}) \n**Description:** ${description || "No description"}` },
                    { name: `Features`, value: `${f.join(", ") || "No features"}` },
                    
               )

          interaction.followUp({embeds: [embed]})
   }
}
