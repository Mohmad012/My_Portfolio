import { lazy } from '@loadable/component'
const ProgressBar = lazy(() => import("react-animated-progress-bar"));

const SecSkills = ({allSkills}) => {

    return (
        <section className="row skills-content">
          {allSkills && allSkills.map((item) => (
            <div className="progress-bar col-lg-4 col-md-6" key={item.id} data-aos="fade-up">
              <h3>{item.skill}</h3>
              <ProgressBar
                        width="400px"
                        height="10px"
                        fontColor="white"
                        trackWidth="10"
                        percentage={item.perc}
                        trackPathColor="#173b6c"
                        trackBorderColor="#fff"
                        hollowBackgroundColor="#173b6c"
                        defColor={{
                          fair: 'orangered',
                          good: 'yellow',
                          excellent: '#149ddd',
                          poor: 'red',
                        }}
                        
              />
            </div>
          ))}

        </section>
    )
}

export default SecSkills;