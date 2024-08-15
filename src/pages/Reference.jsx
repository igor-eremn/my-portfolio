import { useState } from 'react';
import styles from '../styles/Reference.module.css';
import { Mail, Link } from "lucide-react"

const references = [
    {
      name: "Kevin O’Neil",
      relation: "Former Professor",
      description: "Associate Teaching Professor in Computer Science Department at Thompson Rivers University, Kamloops, BC, Canada",
      email: "koneil@tru.ca",
      link: 'https://www.tru.ca/science/departments/compsci/people.html'
    },
    {
      name: "Mahnhoon Lee",
      relation: "Former Professor",
      description: "Associate Teaching Professor in Computer Science Department at Thompson Rivers University, Kamloops, BC, Canada",
      email: "mlee@tru.ca",
      link: 'https://www.tru.ca/science/departments/compsci/people.html'
    },
    {
      name: "Mridula Sharma",
      relation: "Former Professor",
      description: "Associate Teaching Professor in Computer Science Department at Thompson Rivers University, Kamloops, BC, Canada",
      email: "msharma@tru.ca",
      link: 'https://www.tru.ca/science/departments/compsci/people.html'
    },
    {
      name: "Gordon Ross",
      relation: "Former Team Lead",
      description: "Branch Team Lead at SKYTRAC Kelowna, BC, Canada",
      email: "gordon.ross@example.com",
      link: 'https://www.skytrac.ca/'
    },
  ];

const ReferenceCard = ({ name, relation, description, email, link }) =>(
    <div className={`${styles.reference_card_wrapper}`}>
        <div className={`${styles.reference_card}`}>
            <div className={`${styles.reference_card_content}`}>
                <div className={`${styles.reference_card_header}`}>
                    <span className={`${styles.reference_name}`}>{name}</span>
                    <span className={`${styles.reference_relation}`}>{relation}</span>
                </div>
                <div className={`${styles.reference_description}`}>{description}</div>
            </div>
        </div>
        <a href={`mailto:${email}`} className={`${styles.email_button}`}>
            <button className={`${styles.mail_button}`}><Mail /></button>
        </a>
        <a href={link} target="_blank" rel="noreferrer" className={`${styles.email_button}`}>
            <button className={`${styles.link_button}`}>
                <Link />
            </button>
        </a>
    </div>
);

function Reference() {

    return(
        <div className={`${styles.page}`}>
            <div>
                <div>
                {references.map((ref, index) => (
                    <ReferenceCard
                    key={index}
                    name={ref.name}
                    relation={ref.relation}
                    description={ref.description}
                    email={ref.email}
                    link={ref.link}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Reference;