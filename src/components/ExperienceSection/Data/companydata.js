import { BlackbaudOne, BlackbaudTwo, TeachingAssistant, Researcher } from './experiencedata'
import BlackbaudImg from '../../../images/Blackbaud.png'
import ClemsonImg from '../../../images/Clemson.png'
import ClemsonHonorsImg from '../../../images/ClemsonHonors.jpeg'

export const Blackbaud = {
    id: 'Blackbaud',
    company: 'Blackbaud Inc.',
    experiences: [
        BlackbaudOne,
        BlackbaudTwo
    ],
    picture: {BlackbaudImg}
}

export const Clemson = {
    id: 'Clemson',
    company: 'Clemson University',
    experiences: [
        TeachingAssistant
    ],
    picture: {ClemsonImg}
}

export const ClemsonHonors = {
    id: 'ClemsonHonors',
    company: 'Clemson University Honors College',
    experiences: [
        Researcher
    ],
    picture: {ClemsonHonorsImg}
}