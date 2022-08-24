import { BlackbaudOne, BlackbaudTwo, TeachingAssistant, Researcher, PFG } from './experiencedata'
import BlackbaudImg from '../../../images/Blackbaud.png'
import ClemsonImg from '../../../images/Clemson.png'
import ClemsonHonorsImg from '../../../images/ClemsonHonors.jpeg'
import PFGImg from '../../../images/PFG.jpeg'

export const Principal = {
    id: 'PFG',
    company: 'Principal Financial Group',
    title: 'Data Engineering Intern',
    experiences: [
        PFG
    ],
    picture: PFGImg
}

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