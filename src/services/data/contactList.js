import discord from '../../assets/IconContact/discord.png'
import github from '../../assets/IconContact/github-1.png'
import gmail from '../../assets/IconContact/gmail.png'
import linkedin from '../../assets/IconContact/linkedin.png'
import maps from '../../assets/IconContact/maps.png'
import phone from '../../assets/IconContact/phone.png'

export const iconsContactList = [discord, github, gmail, linkedin, maps, phone]

export const contactList = [
  {
    contactID: '1',
    contactType: 'Mail',
    contactContent: 'frederic.kreuder.pro@gmail.com',
    contactLink: 'mailto:frederic.kreuder.pro@gmail.com',
    iconContactPath: gmail,
    // iconContactPath: require('../../assets/IconContact/gmail.png'),
  },
  {
    contactID: '2',
    contactType: 'LinkedIn',
    contactContent: 'https://www.linkedin.com/in/frédéric-kreuder',
    contactLink: 'https://www.linkedin.com/in/frédéric-kreuder',
    iconContactPath: linkedin,
    // iconContactPath: require('../../assets/IconContact/linkedin.png'),
  },
  {
    contactID: '3',
    contactType: 'GitHub',
    contactContent: 'https://github.com/Frederic-K/Frederic-K',
    contactLink: 'https://github.com/Frederic-K/Frederic-K',
    iconContactPath: github,
    // iconContactPath: require('../../assets/IconContact/github-1.png'),
  },
  {
    contactID: '4',
    contactType: 'Discord',
    contactContent: 'Ark7442',
    contactLink: 'https://discord.com/',
    iconContactPath: discord,
    // iconContactPath: require('../../assets/IconContact/discord.png'),
  },
  {
    contactID: '5',
    contactType: 'Mobile',
    contactContent: '06 51 100 365',
    contactLink: 'tel:+33651100365',
    iconContactPath: phone,
    // iconContactPath: require('../../assets/IconContact/phone.png'),
  },
  {
    contactID: '6',
    contactType: 'Adresse',
    contactContent: 'Schiltigheim, Grand Est - France',
    contactLink:
      'https://maps.google.com?q=48.60564521247025, 7.74840158205735',
    iconContactPath: maps,
    // iconContactPath: require('../../assets/IconContact/maps.png'),
  },
]
