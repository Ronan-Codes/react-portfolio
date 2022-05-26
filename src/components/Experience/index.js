import React, {useState} from "react";
import './Experience.css'
import { experience } from "../../constants/experience";

export const Experience = () => {
    const [experienceList] = useState(experience)

    return (
        <section className="experiences mt-md-0 mt-3">
            {experienceList.map((experience) => {return (
                <div className="experience fs-6">
                    <h2 className="fs-3 m-0">{experience.company}</h2>
                    <i>{experience.role}</i>
                    <p className="m-0">{experience.date}</p>
                    <p className="m-0">{experience.location}</p>

                    <ul className="mt-2">
                        {experience.responsibilities.map((resp) => {return (
                            <li className="experience__li">{resp}</li>
                        )})}
                    </ul>
                </div>
            )})}
        </section>
    )
}