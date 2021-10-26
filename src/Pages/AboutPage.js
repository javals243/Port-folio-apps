import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'45%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'70%'} />
                <SkillsSection skill={'C#'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'20%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'20%'} />
            </div>

            <Tittle title = {'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Frotend developper'} 
                text={' i am  frontend developer  to CRES.'}
                />
                <ServicesSection image={intelligence} title={'Backend developer '} 
                text={'bacekend it is my pation.'}
                />
                <ServicesSection image={gamedev} title={'Android developper '} 
                text={'i dont have a necesary ....'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
