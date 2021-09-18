import { useEffect } from 'react'

import allSkills from '../../data/data-containers/data-Skills.js'

import {handelTitle} from '../../utils';

import SuspenseCustom from '../../components/SuspenseCustom'
import MainContent from '../../components/MainContent'

import SecSkills from './SecSkills'

const SkillsContainer = () => {

    useEffect(() => {
        handelTitle('Skills')
    },[])

    return(
      <SuspenseCustom>
        <MainContent
              ID='skills'
              NameClassSection='skills section-bg'
              textP='Check out some of my skills...'
              textH='Skills'
        >
          <SecSkills allSkills={allSkills} />
        </MainContent>
      </SuspenseCustom>
    )
};

export default SkillsContainer