import { BlackbaudOne, BlackbaudTwo, TeachingAssistant, Researcher } from './experiencedata'
import BlackbaudImg from '../../../images/Blackbaud.png'
import ClemsonImg from '../../../images/Clemson.png'
import ClemsonHonorsImg from '../../../images/ClemsonHonors.jpeg'

export const Blackbaud = {
    id: 'Blackbaud',
    company: 'Blackbaud Inc.',
    title: 'Software Engineering Intern',
    experiences: [
        BlackbaudOne,
        BlackbaudTwo
    ],
    picture: BlackbaudImg
}

export const Clemson = {
    id: 'Clemson',
    company: 'Clemson University',
    title: 'Undergraduate Teaching Assistant',
    experiences: [
        TeachingAssistant
    ],
    picture: ClemsonImg
}

export const ClemsonHonors = {
    id: 'ClemsonHonors',
    company: 'Clemson University Honors College',
    title: 'Researcher',
    experiences: [
        Researcher
    ],
    picture: ClemsonHonorsImg
}